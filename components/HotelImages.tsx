import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHotel } from "@/store/HotelContext";
const HotelImages = () => {
  const { selectedHotel } = useHotel() ?? { selectedHotel: null };

  return (
    <div className="border rounded-lg relative">
      <Image
        src={selectedHotel?.images[0]?.thumbnail || "/images/hotel-2.jpg"}
        alt={selectedHotel?.name || "Hotel image"}
        className="w-full object-cover relative  h-[69vh] rounded-lg shadow-lg"
        width={350}
        height={10}
      />
      <div className="absolute bottom-0 left-0 w-full h-32 flex items-end justify-start p-4 rounded-b-md bg-gradient-to-t from-black">
        <Dialog>
          <DialogTrigger>
            <h1 className="text-lg font-medium">
              {selectedHotel?.images.length} Property Photos
            </h1>
          </DialogTrigger>
          <DialogContent className="p-10 w-full flex items-center justify-center">
            <Carousel className="w-full max-w-[400px]">
              <CarouselContent>
                {selectedHotel?.images.map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <Image
                            src={
                              selectedHotel?.images[index]?.thumbnail ||
                              "/images/hotel-2.jpg"
                            }
                            alt={selectedHotel?.name || "Hotel image"}
                            className="w-full object-cover relative  h-[69vh] rounded-lg shadow-lg"
                            width={350}
                            height={10}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default HotelImages;
