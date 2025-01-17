import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ChevronRight, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface HotelProps {
  name: string;
  type: string;
  location: {
    latitude: number;
    longitude: number;
  };
  rate_per_night: {
    lowest: string;
  };
  images: {
    thumbnail: string;
  }[];
}

export const HotelListing = ({ hotel }: { hotel: HotelProps }) => {
  return (
    <Card className="hover:scale-105 transition-all flex flex-col justify-between">
      <Image
        src={hotel.images[0].thumbnail}
        alt={hotel.name}
        width={240}
        height={240}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <CardHeader>
        <CardTitle className="text-xl">{hotel.name}</CardTitle>
        <CardDescription className="flex gap-2 items-center">
          <MapPin size={20} /> {hotel.type}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <p>{/* <b>{hotel.rate_per_night.lowest}</b>/night */}</p>
          {/* <p>
            {hotel.location.latitude.toFixed(2)},{" "}
            {hotel.location.longitude.toFixed(2)}
          </p> */}
        </div>
      </CardContent>
      <CardFooter className="">
        <Link href="/hotels/hotel-details/1" className="w-full">
          <Button className="w-full">
            See availability
            <ChevronRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
