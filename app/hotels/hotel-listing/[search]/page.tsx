"use client";
import { HotelListing } from "@/components/HotelListing";
import SearchForm from "@/components/SearchForm";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const { getJson } = require("serpapi");

function page({ params }: { params: { search: string } }) {
  const searchParams = useSearchParams();
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

  console.log(search);

  // const [hotels, setHotels] = useState<any[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchHotels = async () => {
  //     const response = await fetch(
  //       "/api/getHotels?location=Bali Resorts&check_in_date=2025-01-11&check_out_date=2025-01-12&adults=2"
  //     );
  //     const data = await response.json();
  //     setHotels(data);
  //     setLoading(false);
  //   };

  //   fetchHotels();
  // }, []);

  // console.log(hotels);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          "https://serpapi.com/search.json?engine=google_hotels&q=Bali+Resorts&check_in_date=2025-01-11&check_out_date=2025-01-12&adults=2&currency=USD&gl=us&hl=en&api_key=f8e014f2a0aaa4cf7e08e2afc14724575486bc3018e9b0bc033fdb3f4776f4cc",
          { mode: "no-cors" }
        );
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.log("Error fetching hotels", e);
      }
    };
    fetchHotels();
  }, []);
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div className="w-full max-w-7xl mx-auto mt-8 bg-primary-foreground p-4 rounded-lg shadow-md">
        <SearchForm values={currentSearch} />
      </div>
      <div className="grid grid-cols-4 gap-4 w-full mt-6">
        <div className="border h-[40vh] hidden md:flex flex-col items-center p-2 rounded-lg">
          Sidebar Goes Here
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 col-span-4 md:col-span-3 gap-4 mx-auto w-full">
          <HotelListing />
          <HotelListing />
          <HotelListing />
          <HotelListing />
          <HotelListing />
        </div>
      </div>
    </div>
  );
}

export default page;
