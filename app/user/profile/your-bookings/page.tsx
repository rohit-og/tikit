"use client";

import React, { useEffect, useState } from "react";
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

interface BookingProperties {
  rooms: number;
  adults: number;
  children: number;
}

interface Booking {
  _id: string;
  hotel_id: string;
  check_in_date: string;
  check_out_date: string;
  ticket_number: string;
  booking_properties: BookingProperties;
  createdAt: string;
}

const page = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("/api/bookings");
        const data = await response.json();
        if (data.success) {
          setBookings(data.bookings);
        }
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div className="p-12">Loading your bookings...</div>;
  }

  if (!bookings.length) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-xl font-semibold">No bookings found</h2>
        <p className="text-muted-foreground mt-2">
          You haven't made any bookings yet.
        </p>
      </div>
    );
  }
  return (
    <div className="border rounded-lg">
      <div className="flex flex-col gap-2 p-12">
        <h1 className="text-3xl font-semibold">Your Bookings</h1>
        <p className="text-foreground/70">Manage all your bookings here.</p>
      </div>
      <ScrollArea className="h-[65vh] w-full p-4 md:px-12">
        <div className="flex flex-col gap-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="p-4 rounded-lg border shadow-sm flex justify-between"
            >
              <div className="flex bg-accent rounded-lg py-4 flex-col items-center justify-center w-fit px-12 md:px-6">
                <p>
                  {new Date(booking.check_in_date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
                <p className="text-3xl font-semibold">
                  {new Date(booking.check_in_date).toLocaleDateString("en-US", {
                    day: "2-digit",
                  })}
                </p>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-start items-start gap-4 md:justify-between md:items-center px-8">
                <div className="min-w-[60%]">
                  <h1 className="text-lg">Booking #{booking.ticket_number}</h1>
                  <p className="flex items-center gap-1 mt-2">
                    <MapPin size={18} className="text-foreground/70" />
                    {booking.hotel_id}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {booking.booking_properties.rooms} Room(s) •{" "}
                    {booking.booking_properties.adults} Adults •{" "}
                    {booking.booking_properties.children} Children
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-fit">
                  <p className="flex gap-2">
                    <CalendarArrowDown
                      size={18}
                      className="text-foreground/70"
                    />
                    {new Date(booking.check_in_date).toLocaleDateString()}
                  </p>
                  <p className="flex gap-2">
                    <CalendarArrowUp size={18} className="text-foreground/70" />
                    {new Date(booking.check_out_date).toLocaleDateString()}
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
                        <Eye className="mr-2" /> View Booking
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2" /> Download Ticket
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <CircleX className="mr-2" />
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
