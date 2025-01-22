import React from "react";
import { Progress } from "@/components/ui/progress";
import { Star, ThumbsUp } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useHotel } from "@/store/HotelContext";

const ratings = [
  {
    star: "5",
    name: "Excellent",
    value: 69,
  },
  {
    star: "4",
    name: "Very Good",
    value: 19,
  },
  {
    star: "3",
    name: "Avarage",
    value: 7,
  },
  {
    star: "2",
    name: "Poor",
    value: 3,
  },
  {
    star: "1",
    name: "Bad",
    value: 3,
  },
];

const reviews = [
  {
    ReviewTitle: "Amazing Stay with Great Service!",
    ReviewContent:
      "The staff was incredibly friendly, and the rooms were spotless. The breakfast buffet was a highlight. Highly recommend this hotel for anyone visiting the city.",
    UserName: "TravelGuru23",
    Date: "2025-01-15",
    Rating: 5,
  },
  {
    ReviewTitle: "Good Location but Noisy Nights",
    ReviewContent:
      "The hotel is conveniently located near the main attractions, but the street noise kept me up at night. Recommend bringing earplugs if you’re a light sleeper.",
    UserName: "NightOwl89",
    Date: "2025-01-14",
    Rating: 3,
  },
  {
    ReviewTitle: "Perfect for a Business Trip",
    ReviewContent:
      "Stayed here for a conference and found everything I needed. The Wi-Fi was fast, and the conference facilities were top-notch. Will definitely stay here again.",
    UserName: "BizTraveler56",
    Date: "2025-01-13",
    Rating: 4,
  },
  {
    ReviewTitle: "Disappointed with Cleanliness",
    ReviewContent:
      "The room wasn’t cleaned properly, and I found leftover items from the previous guest. Not what I expected for the price I paid.",
    UserName: "CleanFreak88",
    Date: "2025-01-12",
    Rating: 2,
  },
  {
    ReviewTitle: "Family-Friendly and Spacious",
    ReviewContent:
      "We stayed with our kids, and the family suite was perfect. Lots of space, and the kids loved the pool. Great value for money.",
    UserName: "FamilyAdventurers",
    Date: "2025-01-11",
    Rating: 5,
  },
  {
    ReviewTitle: "Average Experience",
    ReviewContent:
      "The stay was okay but nothing special. The room was fine, but the service felt impersonal. Good if you’re looking for a budget-friendly option.",
    UserName: "BudgetSeeker",
    Date: "2025-01-10",
    Rating: 3,
  },
  {
    ReviewTitle: "Luxurious and Worth Every Penny",
    ReviewContent:
      "This hotel exceeded my expectations in every way. The spa, the dining, and the attention to detail were unparalleled. A must-stay for luxury lovers.",
    UserName: "LuxuryLover101",
    Date: "2025-01-09",
    Rating: 5,
  },
  {
    ReviewTitle: "Great for a Weekend Getaway",
    ReviewContent:
      "Had a lovely time here over the weekend. The staff was warm and helpful, and the local attractions were easily accessible. Highly recommend!",
    UserName: "WeekendWanderer",
    Date: "2025-01-08",
    Rating: 4,
  },
  {
    ReviewTitle: "Overpriced and Underwhelming",
    ReviewContent:
      "For the price, I expected much better amenities. The room was small, and the breakfast options were very limited. Wouldn’t recommend.",
    UserName: "DisappointedGuest",
    Date: "2025-01-07",
    Rating: 2,
  },
  {
    ReviewTitle: "Exceptional Staff and Comfort",
    ReviewContent:
      "From check-in to check-out, the staff made me feel at home. The bed was super comfy, and the overall ambiance was just perfect.",
    UserName: "HappyTraveler45",
    Date: "2025-01-06",
    Rating: 5,
  },
];

const UserRatings = ({}) => {
  const { selectedHotel } = useHotel() ?? { selectedHotel: null };

  const rat = selectedHotel?.rating;
  console.log(rat);
  return (
    <div id="ratings">
      <h1 className="text-3xl font-semibold my-4">User ratings & reviews</h1>
      <div className="border p-10 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="flex gap-4 items-center">
            <div className="h-16 w-24 bg-accent rounded-lg flex items-center justify-center">
              <h1 className="text-3xl font-semibold">4.4</h1>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Excellent</h1>
              <p>254 Ratings, 122 Reviews</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3 mt-6">
              {ratings.map((e) => (
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <p>{e.name}</p>
                    <p>{e.value}%</p>
                  </div>

                  <Progress value={e.value} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
          {reviews.map((e) => (
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-lg font-semibold">{e.ReviewTitle}</h1>
                  <p className="text-secondary-foreground text-md">
                    {e.UserName} | {e.Date}
                  </p>
                </div>
                <div className="flex items-center justify-center h-12 px-4 border rounded-lg gap-2">
                  <p className="text-xl font-semibold">{e.Rating}</p>
                  <Star size={18} />
                </div>
              </div>
              <div className="flex flex-col gap-6 mt-4">
                <p>{e.ReviewContent}</p>
                <div className="flex gap-2 items-start">
                  <p>Helpful</p>{" "}
                  <ThumbsUp
                    className="hover:scale-110 transition-all cursor-pointer"
                    size={18}
                  />
                </div>
              </div>
            </div>
          ))}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default UserRatings;
