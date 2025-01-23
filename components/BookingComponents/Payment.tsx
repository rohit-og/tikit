"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  cardNumber: z.string().min(16, { message: "Enter a valid card number" }),
  expiryDate: z.string().min(5, { message: "Enter a valid expiry date" }),
  cvv: z.string().min(3, { message: "Enter a valid CVV" }),
  cardHolder: z.string().min(2, { message: "Card holder name is required" }),
});

interface PaymentProps {
  onNext: () => void;
}

const Payment = ({ onNext }: PaymentProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardHolder: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    onNext();
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Payment Form */}
          <div className="col-span-2 bg-card rounded-[var(--radius)] shadow-sm p-8 border">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-card-foreground mb-2">
                Payment Details
              </h1>
              <p className="text-muted-foreground">
                Enter your payment information securely
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1234 5678 9012 3456"
                          {...field}
                          className="focus:ring-ring"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry Date</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="MM/YY"
                            {...field}
                            className="focus:ring-ring"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="123"
                            maxLength={3}
                            {...field}
                            className="focus:ring-ring"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="cardHolder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Holder Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="focus:ring-ring"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Confirm Payment
                </Button>
              </form>
            </Form>
          </div>

          {/* Right Section - Payment Summary */}
          <div className="bg-card rounded-[var(--radius)] shadow-sm p-6 border">
            <h2 className="text-xl font-medium text-card-foreground mb-6">
              Payment Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium text-card-foreground">
                  $150.00
                </span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-medium text-card-foreground">$15.00</span>
              </div>
              <div className="flex justify-between py-3 mt-4">
                <span className="text-lg font-semibold text-card-foreground">
                  Total
                </span>
                <span className="text-lg font-semibold text-primary">
                  $165.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
