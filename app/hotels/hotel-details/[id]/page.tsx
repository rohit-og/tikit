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
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useHotel } from "@/store/HotelContext";

const page = ({ params }: { params: { id: string } }) => {
  const [hotel, setHotel] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const search = {
    location: searchParams.get("q"),
    check_in_date: searchParams.get("check_in_date"),
    check_out_date: searchParams.get("check_out_date"),
    adults: searchParams.get("adults"),
    property_token: searchParams.get("property_token"),
  };

  const { selectedHotel } = useHotel() ?? { selectedHotel: null };

  console.log(selectedHotel);
  return (
    <div className="w-full px-4 py-6">
      {/* header */}
      {/* <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col gap-4 max-w-[70%]">
          <h1 className="text-2xl sm:text-3xl font-medium">
            {selectedHotel?.name}
          </h1>
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MapPin />
              {selectedHotel?.type}
            </div>
            {selectedHotel?.ratings &&
              `(${selectedHotel.ratings.length}) Ratings`}
          </div>
        </div>
        <ActionButtons />
      </div> */}
      {/* header */}
      {/* content */}

      <div>
        <div className="max-w-7xl max-h-[20px] w-full mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <HotelImages />
          <div>
            <Card className="">
              <CardHeader>
                <CardTitle className="text-3xl font-medium">
                  {selectedHotel?.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  Fits {selectedHotel?.adults || 2} Adults
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p>
                  {selectedHotel?.description ||
                    "A comfortable stay awaits you"}
                  <Dialog>
                    <DialogTrigger>
                      <span className="text-primary cursor-pointer">More</span>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Property Details</DialogTitle>
                        <DialogDescription>
                          {selectedHotel?.full_description ||
                            selectedHotel?.description}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </p>
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">
                    ₹ {selectedHotel?.rate_per_night?.lowest || "8,599"}
                    <span className="text-2xl font-medium">/Night</span>
                  </h1>
                  <Link href="/bookings">
                    <Button className="w-[199px]">Book Now</Button>
                  </Link>
                </div>
              </CardContent>
              <CardFooter>
                <div className=" flex flex-col gap-4">
                  <div className="flex justify-between border-2 rounded-lg p-4 gap-4 items-center w-full">
                    <div className="h-14 w-16 flex items-center justify-center bg-accent rounded-lg">
                      <p className="text-lg font-semibold">
                        {selectedHotel?.rating || "4.4"}
                      </p>
                    </div>
                    <div className="w-[60%">
                      <p className="text-lg font-semibold">
                        Excellent{" "}
                        <span className="text-lg font-thin">
                          ({selectedHotel?.total_reviews || "254"} ratings)
                        </span>
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
                        <p className="text-lg font-semibold">
                          {selectedHotel?.location?.address || "Location"}
                        </p>
                        <span className="text-sm font-thin">
                          {selectedHotel?.distance_to_landmark ||
                            "4 minutes walk to nearby attractions"}
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
