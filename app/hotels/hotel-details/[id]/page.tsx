"use client";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ActionButtons from "@/components/ActionButtons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import UserRatings from "@/components/UserRatings";
import HotelImages from "@/components/HotelImages";
import Link from "next/link";

const page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div className="w-full px-4 py-6">
      {/* header */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col gap-4 max-w-[70%]">
          <h1 className="text-2xl sm:text-3xl font-medium">
            Hotel ka naam idhar aayega
          </h1>
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MapPin />
              Hotel, ka address, idhar
            </div>
            (32) Ratings
          </div>
        </div>
        <ActionButtons />
      </div>
      {/* header */}
      {/* content */}

      <div>
        <div className="max-w-7xl max-h-[20px] w-full mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <HotelImages />
          <div>
            <Card className="">
              <CardHeader>
                <CardTitle className="text-3xl font-medium">
                  1 KING BED WITH BALCONY
                </CardTitle>
                <CardDescription className="text-lg">
                  Fits 2 Adults
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p>
                  A boutique resort with an Indo-Portuguese architecture, the
                  Ronil Goa offers lively holidays filled with recreational
                  activities.{" "}
                  <Dialog>
                    <DialogTrigger>
                      <span className="text-primary cursor-pointer">More</span>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Property Details</DialogTitle>
                        <DialogDescription>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ex ducimus expedita, magni facilis libero quod
                          tempore quae beatae sed rem aliquid iure eveniet,
                          totam quasi placeat reiciendis ab et. Voluptate.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </p>
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">
                    ₹ 8,599<span className="text-2xl font-medium">/Night</span>
                  </h1>
                  <Button className="w-[199px]">Book Now</Button>
                </div>
              </CardContent>
              <CardFooter>
                <div className=" flex flex-col gap-4">
                  <div className="flex justify-between border-2 rounded-lg p-4 gap-4 items-center w-full">
                    <div className="h-14 w-16 flex items-center justify-center bg-accent rounded-lg">
                      <p className="text-lg font-semibold">4.4</p>
                    </div>
                    <div className="w-[60%">
                      <p className="text-lg font-semibold ]">
                        Excellent{" "}
                        <span className="text-lg font-thin">(254 ratings)</span>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-md cursor-pointer text-primary">
                        <Link href="#ratings">All Reviews</Link>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between border-2 rounded-lg p-4 gap-4 items-center w-full">
                      <div className="h-14 w-16 flex items-center justify-center bg-accent rounded-lg">
                        <MapPin />
                      </div>
                      <div className="flex flex-col justify-start w-[60%]">
                        <p className="text-lg font-semibold">Baga</p>
                        <span className="text-sm font-thin">
                          4 minutes walk to Baga Beach
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-md cursor-pointer text-primary">
                          See on Map
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="col-spanq lg:col-span-2">
            <UserRatings />
          </div>
        </div>
      </div>
      {/* content */}
    </div>
  );
};

export default page;
