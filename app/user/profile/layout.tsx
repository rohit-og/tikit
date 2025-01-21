import Sidebar from "@/components/Sidebar";
import UserSidebar from "@/components/UserComponents/UserSidebar";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full py-2 sm:py-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 max-w-7xl mx-auto max-h-fit gap-4">
        <div className="flex md:hidden sm:col-span-3 items-end justify-end w-full">
          <Sheet>
            <SheetTrigger className="flex justify-end">
              <Button variant="ghost">
                Menu
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left mb-6">Profile Menu</SheetTitle>
              </SheetHeader>
              <UserSidebar />
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex col-span-1 border p-6 rounded-lg max-h-fit bg-card">
          <UserSidebar />
        </div>

        <div className="flex flex-col w-full col-span-1 sm:col-span-3 md:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
}
