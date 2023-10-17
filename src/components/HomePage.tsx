import { Theme, useTheme } from "@/context/ThemeContxt";
import React from "react";
import TopBar from "./TopBar";
import Profile from "./Profile";
import profileData from "@/data/profileData.json";

const HomePage = () => {
  const themeContext = useTheme();  
  const { theme } = themeContext;

  return (
    <div className={theme === Theme.DARK ? "dark" : ""}>
      <div className="min-h-screen flex-col items-center">
        <TopBar />
        <Profile profileData={profileData} />
      </div>
    </div>
  );
};

export default HomePage;
