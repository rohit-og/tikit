"use client";

import { Button } from "./ui/button";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const NavBar = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex justify-between items-center p-4 border-b ">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="text-2xl sm:text-3xl font-semibold">TiKit</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link href="/user/auth">
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
