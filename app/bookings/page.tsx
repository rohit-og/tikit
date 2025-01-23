"use client";

import Overview from "@/components/BookingComponents/Overview";
import React, { useState } from "react";
import Payment from "@/components/BookingComponents/Payment";
import Confirmation from "@/components/BookingComponents/Confirmation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState("overview");

  const steps = [
    {
      id: "overview",
      label: "Overview",
      progress: 33.33,
      color: "bg-blue-500",
    },
    {
      id: "payment",
      label: "Payment",
      progress: 66.66,
      color: "bg-yellow-500",
    },
    {
      id: "confirmation",
      label: "Confirmation",
      progress: 100,
      color: "bg-green-500",
    },
  ];

  const getCurrentStepIndex = () => {
    return steps.findIndex((step) => step.id === currentStep);
  };

  const getProgressBarColor = () => {
    return steps[getCurrentStepIndex()].color;
  };

  const handleBack = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "overview":
        return <Overview onNext={() => setCurrentStep("payment")} />;
      case "payment":
        return <Payment onNext={() => setCurrentStep("confirmation")} />;
      case "confirmation":
        return <Confirmation />;
      default:
        return <Overview onNext={() => setCurrentStep("payment")} />;
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 pt-4">
          <Button
            variant="ghost"
            onClick={() => {
              if (currentStep !== "overview") {
                handleBack();
              } else {
                window.history.back();
              }
            }}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back
          </Button>

          <div className="text-sm font-medium">
            Step {getCurrentStepIndex() + 1} of {steps.length}
          </div>
        </div>

        <div className="mb-8 pt-4 px-4">
          <div className="relative h-2 bg-muted rounded-full mb-6">
            <div
              className={`absolute h-2 rounded-full transition-all duration-500 ${getProgressBarColor()}`}
              style={{
                width: `${steps[getCurrentStepIndex()].progress}%`,
              }}
            />
          </div>

          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`text-sm font-medium ${
                  getCurrentStepIndex() >= index
                    ? step.color.replace("bg-", "text-")
                    : "text-muted-foreground"
                }`}
              >
                {step.label}
              </div>
            ))}
          </div>
        </div>

        <div className="px-4">{renderStepContent()}</div>
      </div>
    </div>
  );
};

export default Page;
