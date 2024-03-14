// GamePage.tsx
import { ThemeProvider, Theme, useTheme } from "@/context/ThemeContxt";
import React from "react";
import Link from "next/link";
import GamesList from "./GameList";
import ToggleButton from "../ThemeToggle";

const gamesData = [
  { id: 1, name: "Game 1", thumbnail: "/game1.jpg", path: "/games/1" },
  { id: 2, name: "Game 2", thumbnail: "/game2.jpg", path: "/games/2" },
];

const GamePage = () => {
  const themeContext = useTheme();
  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <ThemeProvider>
      <div
        className={`min-h-screen bg-gray-100 dark:bg-gray-800 ${
          theme === Theme.DARK ? "dark" : ""
        }`}
      >
        <div className="container mx-auto py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                Game Landing Page
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Waste a few hours playing these games. You aren&apos;t doing
                anything productive anyway.
              </p>
            </div>
            <ToggleButton />
          </div>
          <GamesList games={gamesData} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default GamePage;
