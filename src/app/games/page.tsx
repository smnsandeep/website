// HomePage.js

'use client'
import { Theme, useTheme } from "@/context/ThemeContxt";
import React from "react";

type Game = {
  title: string;
  description: string;
  path: string;
};

const GamesPage = () => {
  const themeContext = useTheme();
  const { theme } = themeContext;
  const [toastData, setToastData] = React.useState<ToastData>({
    message: "",
    duration: 0,
    showToast: false,
    type: "none",
  });

  // Placeholder data for games
  const gamesData: Game[] = [];

  return (
    <div className={theme === Theme.DARK ? "dark" : ""}>
      <div className="min-h-screen flex-col items-center">
        {/* List of Games */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">List of Games</h2>
          <ul>
            {gamesData.map((game, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{game.title}</h3>
                <p className="text-gray-600">{game.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
