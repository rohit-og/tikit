"use client";
import { Button } from "@/components/ui/button";

import { useSession } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { redirect } from "next/navigation";

const page = () => {
  const { data: session } = useSession();
  return (
    <div>
      <div className="flex flex-col  rounded-lg p-12 border shadow-lg">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-medium">
            Heyo {session?.user.name?.split(" ").slice(0, 1)}👋🏻
          </h1>
          <p className="text-foreground/60 text-sm">
            Manage your details and personal preferences here.
          </p>
        </div>
        <div className="mt-9 border-b py-4">
          <p className="text-md font-semibold">My profile</p>
        </div>
        <div className="w-full lg:w-[70%]">
          <div className="border-b py-4 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Photo</h1>
              <p className="text-foreground/70">
                This will be displayed on your profile
              </p>
            </div>
            <div className="flex items-center">
              <Avatar className="w-12 h-12 md:w-16 md:h-16">
                <AvatarImage src={session?.user.photo} />
                <AvatarFallback className="uppercase text-2xl">
                  {session?.user?.name[0]}
                </AvatarFallback>
              </Avatar>

              <Button variant="link" className="text-secondary-foreground/70">
                Delete
              </Button>
              <Popover>
                <PopoverTrigger>
                  <Button variant="link">Edit</Button>
                </PopoverTrigger>
                <PopoverContent>
                  Place content for the popover here.
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="border-b py-4 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Name</h1>
            </div>
            <div className="flex items-center">
              <p>{session?.user.name}</p>

              <Popover>
                <PopoverTrigger>
                  <Button variant="link">Edit</Button>
                </PopoverTrigger>
                <PopoverContent>
                  Place content for the popover here.
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="border-b py-4 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Birthday</h1>
            </div>
            <div className="flex items-center">
              <p>Not set yet</p>
              <Popover>
                <PopoverTrigger>
                  <Button variant="link">Edit</Button>
                </PopoverTrigger>
                <PopoverContent>
                  Place content for the popover here.
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="border-b py-4 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Your Address</h1>
            </div>
            <div className="flex items-center">
              <p>Not set yet</p>
              <Popover>
                <PopoverTrigger>
                  <Button variant="link">Edit</Button>
                </PopoverTrigger>
                <PopoverContent>
                  Place content for the popover here.
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
