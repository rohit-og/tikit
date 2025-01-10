"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { BedDoubleIcon, CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const formSchema = z.object({
  location: z
    .string()
    .min(2, { message: "Must be two characters or more" })
    .max(50),
  date: z.object(
    {
      from: z.date(),
      to: z.date(),
    },
    { message: "Please select a date range" }
  ),
  adults: z
    .string()
    .min(1, { message: "Please select at least one adult" })
    .max(10, { message: "Maximum of 10 adults" }),
  children: z.string().min(0).max(10, { message: "Maximum of 10 children" }),
  rooms: z.string().min(1, { message: "Please select at least one room" }),
});

function SearchForm({
  values,
}: {
  values: {
    location: string;
    date: {
      from: any;
      to: any;
    };
    adults: number;
    children: number;
    rooms: number;
  };
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: values.location,
      date: {
        from: values.date.from,
        to: values.date.to,
      },
      adults: values.adults.toString(),
      children: values.children.toString(),
      rooms: values.rooms.toString(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const query = new URLSearchParams({
      location: values.location,
      check_in_date: `${format(values.date.from, "yyyy-MM-dd")}`,
      check_out_date: `${format(values.date.to, "yyyy-MM-dd")}`,
      adults: values.adults,
      children: values.children,
      rooms: values.rooms,
    });
    router.push(`/hotels/hotel-listing/search?${query.toString()}`);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-7xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg"
      >
        <div className="grid w-full lg:max-w-sm items-center gap-1.5">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex">
                  Location
                  <BedDoubleIcon className="ml-2 h-4 w-4 text-primary" />
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Input {...field} placeholder="London, UK" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full lg:max-w-sm items-center gap-1.5">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className=" flex">Dates</FormLabel>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        id="date"
                        name="dates"
                        variant={"outline"}
                        className={cn(
                          "w-full lg:w-[300px] justify-start text-left font-normal",
                          !field.value.from && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-3 opacity-50 h-4 w-4" />
                        {field.value?.from ? (
                          field.value?.to ? (
                            <>
                              {format(field.value?.from, "LLL dd, y")} - {""}
                              {format(field.value?.to, "LLL dd, y")}
                            </>
                          ) : (
                            <>{format(field.value?.from, "LLL dd, y")}</>
                          )
                        ) : (
                          <span>Select dates</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      selected={field.value}
                      defaultMonth={field.value.from}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full items-center space-x-2">
          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex">Adults</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input {...field} type="number" placeholder="Adults" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex">Children</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input {...field} type="number" placeholder="Children" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="rooms"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex">Rooms</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input {...field} type="number" placeholder="Rooms" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-auto">
            <Button variant="secondary" type="submit" className="">
              Search
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default SearchForm;
