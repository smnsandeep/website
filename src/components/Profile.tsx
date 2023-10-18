import React, { useEffect } from "react";
import Image from "next/image";
import Socials from "./Socials";
import About from "./About";

interface ProfileProps {
  profileData: {
    profilePicUrl: string;
    name: string;
    title: string;
    description: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ profileData }) => {
  const { profilePicUrl, name, title, description } = profileData;
  const [showArrow, setShowArrow] = React.useState(true);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-w-screen min-h-screen items-center py-40 lg:py-[300px] dark:bg-gray-800">
      <div className="flex flex-col lg:flex-row lg:max-w-[1080px] items-center">
        <div>
          <Image
            src={profilePicUrl}
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full border-4 border-gray-200 shadow-lg"
          />
        </div>
        <div className="items-center lg:items-start flex flex-col pt-16 lg:py-0 lg:pl-16">
          <h1 className="text-5xl lg:text-7xl font-thin text-gray-600 dark:text-white lg:pl-3.5">
            {name}
          </h1>
          <p className="text-gray-600 font-mono dark:text-white text-sm pt-4 lg:pl-5">
            {title}
          </p>
          <p className="mt-4 text-gray-600 dark:text-white lg:pl-5 text-center lg:text-start font-thin">
            {description}
          </p>
        </div>
      </div>
      <div className="pt-44">
        <Socials />
      </div>

      <div
        className={`flex flex-col items-center justify-center mt-14 ${
          showArrow ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="animate-bounce">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-4" id="about_section">
        <About />
      </div>
    </div>
  );
};

export default Profile;
