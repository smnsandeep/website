import { Theme, useTheme } from "@/context/ThemeContxt";
import React from "react";
import TopBar from "./TopBar";
import Profile from "./Profile";
import profileData from "@/data/profileData.json";
import Toast from "./Toast";
import About from "./About";

const HomePage = () => {
  const themeContext = useTheme();  
  const { theme } = themeContext;
  const [toastData, setToastData] = React.useState<ToastData>({
    message: "",
    duration: 0,
    showToast: false,
    type: "none",
  });

  const requestShowToast = (message: string, duration?: number) => {
    setToastData({
      message,
      duration: duration || 2000,
      showToast: true,
      type: "none",
    });
  };

  const resetToast = () => {
    setToastData({
      message: "",
      duration: 0,
      showToast: false,
      type: "none",
    });
  };

  return (
    <div className={theme === Theme.DARK ? "dark" : ""}>
      <div className="min-h-screen flex-col items-center">
        <TopBar requestShowToast={requestShowToast}/>
        <Profile profileData={profileData} />
        {toastData.showToast && <Toast toastData={toastData} callback={resetToast} />}
      </div>
    </div>
  );
};

export default HomePage;
