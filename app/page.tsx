import { HeroSection } from "@/components/HeroSection";
import SearchForm from "@/components/SearchForm";
import { SuggestedLocations } from "@/components/SuggestedLocations";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto p-4">
      <HeroSection />
      <SuggestedLocations />
    </div>
  );
}
