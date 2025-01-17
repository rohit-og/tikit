"use client";
import { HotelListing } from "@/components/HotelListing";
import SearchForm from "@/components/SearchForm";
import { useSearchParams } from "next/navigation";
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
import { Filter } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Page({ params }: { params: { search: string } }) {
  const searchParams = useSearchParams();
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          `/api/getHotels?location=${search.location}&check_in_date=${search.check_in_date}&check_out_date=${search.check_out_date}&adults=${search.adults}`
        );
        const data = await response.json();
        setHotels(data.properties || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setLoading(false);
      }
    };

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
              <Filter /> Filter
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full mt-6 px-4">
        <div className="border h-[40vh] hidden lg:flex flex-col items-center p-2 rounded-lg">
          Sidebar Goes Here
        </div>
        <div className="col-span-4 md:col-span-4 lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-3  gap-4 mx-auto w-full ">
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
              hotels
                .slice(0, 9)
                .map((hotel, index) => (
                  <HotelListing key={index} hotel={hotel} />
                ))
            )}
          </div>
          {!loading && (
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
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
