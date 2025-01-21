"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data: session } = useSession();
  return (
    <div className="border flex p-12 rounded-lg flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Account Settings</h1>
        <p className="text-foreground/70">
          Change your primary email and password here.
        </p>
      </div>
      <div className="flex flex-col w-full lg:w-3/4">
        <div className="py-4 border-t flex justify-between w-full gap-24">
          <h1>Primary Email</h1>
          <div className="flex gap-4 items-center">
            <p>{session?.user.email}</p>
            <Button variant="link">Edit</Button>
          </div>
        </div>
        <div className="py-4 border-t flex justify-between w-full gap-24">
          <h1>Password</h1>
          <div className="flex gap-4 items-center">
            <p>******</p>
            <Button variant="link">Edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
