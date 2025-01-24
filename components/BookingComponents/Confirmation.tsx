"use client";

import { Button } from "@/components/ui/button";
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import TicketPDF from "./TicketPDF";
import { useEffect } from "react";

const Confirmation = () => {
  const bookingDetails = {
    bookingId: "#TK12345",
    event: "Premium Access",
    date: "March 15, 2024",
    time: "7:00 PM",
    quantity: "2 Tickets",
    totalPaid: "$165.00",
  };

  const createBooking = async () => {
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Booking created:", data);
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  useEffect(() => {
    createBooking();
  }, []);

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-card rounded-[var(--radius)] shadow-sm p-8 border text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-primary mx-auto" />
          </div>

          {/* Confirmation Message */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-card-foreground mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-muted-foreground">
              Your booking has been successfully confirmed. We've sent a
              confirmation email with all the details.
            </p>
          </div>

          {/* Booking Details */}
          <div className="bg-accent/50 rounded-lg p-6 mb-8 max-w-md mx-auto">
            <h2 className="font-medium text-card-foreground mb-4">
              Booking Details
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Booking ID</span>
                <span className="font-medium text-card-foreground">
                  #TK12345
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Event</span>
                <span className="font-medium text-card-foreground">
                  Premium Access
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium text-card-foreground">
                  March 15, 2024
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time</span>
                <span className="font-medium text-card-foreground">
                  7:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Quantity</span>
                <span className="font-medium text-card-foreground">
                  2 Tickets
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t">
                <span className="font-medium text-card-foreground">
                  Total Paid
                </span>
                <span className="font-semibold text-primary">$165.00</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BlobProvider
              document={<TicketPDF bookingDetails={bookingDetails} />}
            >
              {({ blob, url, loading }) => (
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={loading}
                  onClick={() => {
                    if (url) {
                      const link = document.createElement("a");
                      link.href = url;
                      link.download = "Confirmation-Ticket.pdf";
                      link.click();
                    }
                  }}
                >
                  {loading ? "Preparing Download..." : "Download Tickets"}
                </Button>
              )}
            </BlobProvider>

            <Link href="/">
              <Button variant="outline">Return to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
