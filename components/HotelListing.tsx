"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ChevronRight, MapPin, Star } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Rating {
  stars: number;
  count: number;
}
interface Rating {
  stars: number;
  count: number;
}

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
  ratings: Rating[];
  property_token: string;

  check_in_date: string;
  check_out_date: string;
  adults: number;
}

export const HotelListing = ({ hotel }: { hotel: HotelProps }) => {
  const totalReviews =
    hotel.ratings?.reduce((sum, rating) => sum + rating.count, 0) || 0;
  const averageRating =
    hotel.ratings?.reduce(
      (sum, rating) => sum + rating.stars * rating.count,
      0
    ) / totalReviews || 0;
  const thumbnailUrl = hotel.images?.[0]?.thumbnail || "/images/hotel-1.jpg";
  return (
    <Card className="hover:scale-105 transition-all flex flex-col justify-between">
      <Image
        src={thumbnailUrl}
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
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 font-medium">{averageRating.toFixed(1)}</span>
          </div>
          <span className="text-muted-foreground text-sm">
            ({totalReviews} reviews)
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/hotels/hotel-details/search?q=${hotel.name}&check_in_date=${hotel.check_in_date}&check_out_date=${hotel.check_out_date}&adults=${hotel.adults}&currency=INR&gl=us&hl=en&property_token=${hotel.property_token}&api_key=${process.env.SERP_API_KEY}`}
          className="w-full"
        >
          <Button className="w-full">
            See availability
            <ChevronRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
