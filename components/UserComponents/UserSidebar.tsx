"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { LifeBuoy, LogOut, Settings, Ticket, UserPen } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserSidebar = () => {
  const router = useRouter();

  const handleBookingsClick = () => {
    router.push("/user/profile/your-bookings");
  };
  return (
    <div className="w-full max-h-fit">
      <div className="flex flex-col gap-2">
        <Link href="/user/profile/manage-profile" className="w-full">
          <Button variant="ghost" className="w-full flex justify-start gap-2">
            <UserPen />
            Profile
          </Button>
        </Link>
        <Link href="/user/profile/your-bookings" className="w-full">
          <Button
            variant="ghost"
            className="w-full flex justify-start gap-2"
            onClick={handleBookingsClick}
          >
            <Ticket />
            Your Booking
          </Button>
        </Link>
        <Link href="/user/profile/account-settings" className="w-full">
          <Button variant="ghost" className="w-full flex justify-start gap-2">
            <Settings />
            Account Settings
          </Button>
        </Link>
        <Link href="/user/profile/your-bookings" className="w-full">
          <Button variant="ghost" className="w-full flex justify-start gap-2">
            <LifeBuoy />
            Support
          </Button>
        </Link>
        <Link href="/user/profile/your-bookings" className="w-full">
          <Button
            onClick={() => signOut({ callbackUrl: "/user/auth" })}
            variant="ghost"
            className="w-full flex justify-start gap-2"
          >
            <LogOut />
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UserSidebar;
