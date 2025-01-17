"use client";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart, Share } from "lucide-react";
import { Button } from "./ui/button";
const ActionButtons = () => {
  const [favourite, setFavourite] = useState(false);
  return (
    <div className="flex gap-3 items-center border py-2 px-4 rounded-md">
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="flex justify-center items-center">
              {favourite ? (
                <Heart
                  className="hover:cursor-pointer hover:scale-110 transition-all"
                  size={28}
                  fill="red"
                  stroke="none"
                  onClick={() => setFavourite(false)}
                />
              ) : (
                <Heart
                  className="hover:cursor-pointer hover:scale-110 transition-all"
                  size={28}
                  onClick={() => setFavourite(true)}
                />
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to favourite</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button size="icon" className="" variant="secondary">
              <Share />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ActionButtons;
