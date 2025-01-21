"use client";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SidebarFilters = () => {
  return (
    <div className="p-4 space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <Slider
          defaultValue={[0, 1000]}
          max={1000}
          step={10}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>₹0</span>
          <span>₹1000+</span>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="property-type">
          <AccordionTrigger className="hover:no-underline">
            Property Type
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Hotels", "Resorts", "Villas", "Apartments"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type} />
                  <Label htmlFor={type}>{type}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="amenities">
          <AccordionTrigger className="hover:no-underline">
            Amenities
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                "Free WiFi",
                "Pool",
                "Spa",
                "Fitness Center",
                "Restaurant",
                "Room Service",
                "Parking",
                "Air Conditioning",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox id={amenity} />
                  <Label htmlFor={amenity}>{amenity}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger className="hover:no-underline">
            Guest Rating
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["5 Stars", "4+ Stars", "3+ Stars"].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={rating} />
                  <Label htmlFor={rating}>{rating}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="meals">
          <AccordionTrigger className="hover:no-underline">
            Meals
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                "Breakfast Included",
                "All Meals Included",
                "Kitchen Available",
              ].map((meal) => (
                <div key={meal} className="flex items-center space-x-2">
                  <Checkbox id={meal} />
                  <Label htmlFor={meal}>{meal}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SidebarFilters;
