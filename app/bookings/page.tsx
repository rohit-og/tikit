import Overview from "@/components/BookingComponents/Overview";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Paymant from "@/components/BookingComponents/Paymant";
import Confirmation from "@/components/BookingComponents/Confirmation";

const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="overview" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="confirmation">Confirmation</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Overview />
          </TabsContent>
          <TabsContent value="payment">
            <Paymant />
          </TabsContent>
          <TabsContent value="confirmation">
            <Confirmation />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
