import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  CalendarArrowDown,
  CalendarArrowUp,
  ChevronDown,
  CircleX,
  Download,
  Eye,
  MapPin,
  Pen,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Button } from "@/components/ui/button";

const bookings = [
  {
    bookingTimestamp: "2025-01-20T15:45:23Z",
    bookingId: "BKG123456789",
    hotelName: "Seaside Paradise Resort",
    hotelLocation: "Miami, FL",
    checkInDate: "2025-02-01",
    checkOutDate: "2025-02-05",
    adults: 2,
    children: 1,
    rooms: 1,
  },
  {
    bookingTimestamp: "2025-01-18T10:22:34Z",
    bookingId: "BKG987654321",
    hotelName: "Mountainview Lodge",
    hotelLocation: "Aspen, CO",
    checkInDate: "2025-03-10",
    checkOutDate: "2025-03-15",
    adults: 4,
    children: 0,
    rooms: 2,
  },
  {
    bookingTimestamp: "2025-01-19T08:12:50Z",
    bookingId: "BKG654123987",
    hotelName: "City Center Suites",
    hotelLocation: "New York, NY",
    checkInDate: "2025-01-25",
    checkOutDate: "2025-01-28",
    adults: 1,
    children: 0,
    rooms: 1,
  },
  {
    bookingTimestamp: "2025-01-15T16:30:12Z",
    bookingId: "BKG321654987",
    hotelName: "Lakeview Retreat",
    hotelLocation: "Lake Tahoe, NV",
    checkInDate: "2025-02-14",
    checkOutDate: "2025-02-17",
    adults: 2,
    children: 2,
    rooms: 1,
  },
  {
    bookingTimestamp: "2025-01-21T11:40:00Z",
    bookingId: "BKG112233445",
    hotelName: "Sunset Bay Hotel",
    hotelLocation: "Honolulu, HI",
    checkInDate: "2025-03-01",
    checkOutDate: "2025-03-07",
    adults: 3,
    children: 1,
    rooms: 2,
  },
  {
    bookingTimestamp: "2025-01-17T09:55:30Z",
    bookingId: "BKG556677889",
    hotelName: "Downtown Comfort Inn",
    hotelLocation: "Chicago, IL",
    checkInDate: "2025-01-30",
    checkOutDate: "2025-02-02",
    adults: 2,
    children: 0,
    rooms: 1,
  },
  {
    bookingTimestamp: "2025-01-19T14:20:18Z",
    bookingId: "BKG998877665",
    hotelName: "Royal Palm Resort",
    hotelLocation: "Orlando, FL",
    checkInDate: "2025-04-05",
    checkOutDate: "2025-04-10",
    adults: 5,
    children: 2,
    rooms: 3,
  },
  {
    bookingTimestamp: "2025-01-16T12:15:45Z",
    bookingId: "BKG223344556",
    hotelName: "Ocean Breeze Hotel",
    hotelLocation: "Santa Monica, CA",
    checkInDate: "2025-02-20",
    checkOutDate: "2025-02-25",
    adults: 2,
    children: 2,
    rooms: 2,
  },
  {
    bookingTimestamp: "2025-01-20T20:10:05Z",
    bookingId: "BKG334455667",
    hotelName: "Luxury Hilltop Villas",
    hotelLocation: "Napa Valley, CA",
    checkInDate: "2025-03-15",
    checkOutDate: "2025-03-20",
    adults: 4,
    children: 1,
    rooms: 2,
  },
  {
    bookingTimestamp: "2025-01-21T07:50:30Z",
    bookingId: "BKG778899001",
    hotelName: "Countryside Inn",
    hotelLocation: "Austin, TX",
    checkInDate: "2025-02-10",
    checkOutDate: "2025-02-12",
    adults: 1,
    children: 0,
    rooms: 1,
  },
];
const page = () => {
  return (
    <div className="border rounded-lg">
      <div className="flex flex-col gap-2 p-12">
        <h1 className="text-3xl font-semibold">Your Bookings</h1>
        <p className="text-foreground/70">Manage all your bookings here.</p>
      </div>
      <ScrollArea className="h-[65vh] w-full p-4 md:px-12">
        <div className="flex flex-col gap-4 ">
          {bookings.map((item) => (
            <div className=" p-4 rounded-lg border shadow-sm flex justify-between">
              <div className="flex bg-accent rounded-lg py-4 flex-col items-center justify-center w-fit px-12 md:px-6">
                <p>
                  {new Date(item.checkInDate).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
                <p className="text-3xl font-semibold">
                  {new Date(item.checkInDate).toLocaleDateString("en-US", {
                    day: "2-digit",
                  })}
                </p>
              </div>
              <div className="w-full flex  flex-col md:flex-row justify-start items-start gap-4 md:justify-between md:items-center px-8">
                <div className="min-w-[60%]">
                  <h1 className="text-lg">{item.hotelName}</h1>
                  <p className="flex items-center gap-1 mt-2">
                    <MapPin size={18} className="text-foreground/70" />
                    {item.hotelLocation}
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-fit">
                  <p className="flex  gap-2">
                    <CalendarArrowDown
                      size={18}
                      className="text-foreground/70"
                    />{" "}
                    {item.checkInDate}
                  </p>
                  <p className="flex gap-2">
                    <CalendarArrowUp size={18} className="text-foreground/70" />
                    {item.checkOutDate}
                  </p>
                </div>
                <div className="w-fit">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button>
                        More <ChevronDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Eye /> View Booking
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download /> Download Ticket
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <CircleX />
                        Cancel Booking
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default page;
