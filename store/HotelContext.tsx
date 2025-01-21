"use client";

import { createContext, useContext, useState } from "react";

interface Rating {
  stars: number;
  count: number;
}

interface HotelContextType {
  selectedHotel: {
    name: string;
    type: string;
    location: {
      address?: string;
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
    room_types?: {
      name: string;
    }[];
    adults?: number;
    description?: string;
    full_description?: string;
    rating?: string;
    total_reviews?: string;
    distance_to_landmark?: string;
  } | null;
  setSelectedHotel: (hotel: any) => void;
}

const HotelContext = createContext<HotelContextType | null>(null);

export function HotelProvider({ children }: { children: React.ReactNode }) {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <HotelContext.Provider value={{ selectedHotel, setSelectedHotel }}>
      {children}
    </HotelContext.Provider>
  );
}

export const useHotel = () => useContext(HotelContext);
