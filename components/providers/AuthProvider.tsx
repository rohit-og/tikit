"use client";
import { SessionProvider } from "next-auth/react";
import { NavBar } from "../NavBar";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
