"use client";
import { HotelListing } from "@/components/HotelListing";
import SearchForm from "@/components/SearchForm";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter, Sidebar } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import SidebarFilters from "@/components/Sidebar";

function Page({ params }: { params: { search: string } }) {
  // const { status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/user/auth");
  //   },
  // });
  const searchParams = useSearchParams();
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const hotelsPerPage = 9;
  const totalPages = Math.ceil(hotels.length / hotelsPerPage);

  const search = {
    location: searchParams.get("location"),
    check_in_date: searchParams.get("check_in_date"),
    check_out_date: searchParams.get("check_out_date"),
    adults: searchParams.get("adults"),
    children: searchParams.get("children"),
    rooms: searchParams.get("rooms"),
  };

  const [currentSearch, setCurrentSearch] = useState({
    location: search.location || "",
    date: {
      from: search.check_in_date ? new Date(search.check_in_date) : undefined,
      to: search.check_out_date ? new Date(search.check_out_date) : undefined,
    },
    adults: search.adults ? Number(search.adults) : 1,
    children: search.children ? Number(search.children) : 0,
    rooms: search.rooms ? Number(search.rooms) : 1,
  });
  const fetchHotels = async (pageToken?: string) => {
    const loadingToast = toast.loading("Fetching available hotels...");
    try {
      const response = await fetch(
        `/api/getHotels?location=${search.location}&check_in_date=${
          search.check_in_date
        }&check_out_date=${search.check_out_date}&adults=${search.adults}${
          pageToken ? `&next_page_token=${pageToken}` : ""
        }`
      );
      const data = await response.json();
      console.log(data);

      // Append new hotels to existing ones if using pageToken
      if (pageToken) {
        setHotels((prevHotels) => [...prevHotels, ...(data.properties || [])]);
      } else {
        setHotels(data.properties || []);
      }

      setNextPageToken(data.serpapi_pagination?.next_page_token || null);
      setLoading(false);
      toast.success("Hotels loaded successfully!", {
        id: loadingToast,
      });
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setLoading(false);
      toast.error("Failed to load hotels", {
        id: loadingToast,
      });
    }
  };

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
    if (page > currentPage && nextPageToken) {
      await fetchHotels(nextPageToken);
    }
  };

  const getCurrentPageHotels = () => {
    const startIndex = (currentPage - 1) * hotelsPerPage;
    return hotels.slice(startIndex, startIndex + hotelsPerPage);
  };

  // Update the pagination JSX
  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={currentPage === i}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        items.push(
          <PaginationItem key={i}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }
    return items;
  };

  useEffect(() => {
    fetchHotels();
  }, [
    search.location,
    search.check_in_date,
    search.check_out_date,
    search.adults,
  ]);

  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div className="w-full max-w-7xl mx-auto mt-8 bg-secondary p-4 rounded-lg shadow-md">
        <SearchForm values={currentSearch} />
      </div>
      <div className="flex w-full mt-6 lg:hidden px-4">
        <Sheet>
          <SheetTrigger>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" /> Filter
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <SidebarFilters />
          </SheetContent>
        </Sheet>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full mt-6 px-4">
        <div className="border h-auto hidden lg:block p-2 rounded-lg">
          <SidebarFilters />
        </div>
        <div className="col-span-4 md:col-span-4 lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 mx-auto w-full">
            {loading ? (
              <div>
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </div>
            ) : (
              getCurrentPageHotels().map((hotel, index) => (
                <HotelListing key={index} hotel={hotel} />
              ))
            )}
          </div>

          {!loading && (
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() =>
                      currentPage > 1 && handlePageChange(currentPage - 1)
                    }
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
                {renderPaginationItems()}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => handlePageChange(currentPage + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
