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

  return (
    <div className="flex flex-col min-w-screen min-h-screen items-center justify-between py-20 lg:py-36 dark:bg-gray-800">
      <div className="flex flex-col lg:flex-row lg:max-w-[1080px] items-center">
        {/* Profile pic and description */}
        <div>
          <Image
            src={profilePicUrl}
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full border-4 border-gray-200 shadow-lg"
          />
        </div>
        <div className="items-center lg:items-start flex flex-col pt-6 lg:pt-0 lg:pl-16">
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

      {/* About Section */}
      <div className="mt-4">
        <About />
      </div>

      {/* Socials Section */}
      <div className="mt-4">
        <Socials />
      </div>
    </div>
  );
};

export default Profile;
