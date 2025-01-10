"use client";

import Image from "next/image";
import SearchForm from "./SearchForm";
import { Button } from "./ui/button";
import { Compass } from "lucide-react";

const searchValues = {
  location: "",
  date: {
    from: undefined,
    to: undefined,
  },
  adults: 1,
  children: 0,
  rooms: 1,
};

export const HeroSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mt-4 sm:mt-24">
          <h1 className="text-5xl font sm:text-7xl font-semibold mb-4 sm:leading-normal">
            Discover Your Perfect Stay
          </h1>
          <p className="text-md sm:text-xl font-light mb-6">
            Explore unbeatable deals on hotels, vacation rentals, and more!
          </p>
          <Button variant="outline" size="lg">
            <Compass />
            Start Exploring
          </Button>
        </div>
        <div className="w-full max-w-xl">
          <div className="grid grid-cols-2 gap-4 items-end">
            <div className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/hotel-1.jpg"
                  alt=""
                  height={320}
                  width={240}
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/hotel-2.jpg"
                  alt=""
                  height={320}
                  width={240}
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/hotel-3.webp"
                  alt=""
                  height={320}
                  width={240}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto mt-8 absolute top-1/1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-foreground p-4 rounded-lg shadow-lg">
        <SearchForm values={searchValues} />
      </div>
    </div>
  );
};
