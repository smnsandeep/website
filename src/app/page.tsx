"use client";
import HomePage from "@/components/HomePage";
import { ThemeProvider } from "@/context/ThemeContxt";

export default function Home() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}
