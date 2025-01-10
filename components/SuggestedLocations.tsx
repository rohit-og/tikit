"use client";

import Image from "next/image";
import Link from "next/link";

const locations = [
  {
    name: "New York",
    image: "/images/new-york.jpg",
    properties: 1000,
    href: "/",
  },
  {
    name: "Los Angeles",
    image: "/images/los-angeles.jpg",
    href: "/",
    properties: "120,890",
  },
  {
    name: "Paris",
    image: "/images/paris.jpg",
    href: "/",
    properties: "120,890",
  },
  {
    name: "Singapore",
    image: "/images/singapore.jpg",
    href: "/",
    properties: "120,890",
  },
  {
    name: "Tokyo",
    image: "/images/tokyo.webp",
    href: "/",
    properties: "120,890",
  },
];
export const SuggestedLocations = () => {
  return (
    <div className="flex flex-col mt-48 w-full">
      <h1 className="text-3xl sm:text-4xl font-medium">
        Suggestions for discovery
      </h1>
      <p className="text-lg mt-4">Popular places to reccomend for you</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
        {locations.map((location) => {
          return (
            <div className="flex flex-col items-start space-y-1 mx-auto">
              <Link href={location.href}>
                <Image
                  className="rounded-lg h-[360px] hover:scale-105 transition-all"
                  src={location.image}
                  alt={location.name}
                  width={240}
                  height={320}
                />
              </Link>
              <h1 className="text-lg font-semibold pt-2">{location.name}</h1>
              <p>{location.properties} Properties</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
