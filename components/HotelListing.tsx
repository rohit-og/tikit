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

export const HotelListing = () => {
  return (
    <Card className="hover:scale-105 transition-all">
      <Image
        src="/images/hotel-2.jpg"
        alt=""
        width={240}
        height={240}
        className="w-full rounded-t-lg"
      />
      <CardHeader>
        <CardTitle className="text-xl">Hotel name goes here</CardTitle>
        <CardDescription className="flex gap-2 item-center">
          <MapPin size={20} /> Location goes here
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <p>
            <b>$220</b>/night
          </p>
          <p>(3 Rating)</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button>
          See availability
          <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  );
};
