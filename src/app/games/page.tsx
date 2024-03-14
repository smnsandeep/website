"use client";
import { ThemeProvider } from "@/context/ThemeContxt";
import React from "react";
import GamesPage from "@/components/games/GamesPage";

const GamePage = () => {
  return (
    <ThemeProvider>
      <GamesPage />
    </ThemeProvider>
  );
};

export default GamePage;
