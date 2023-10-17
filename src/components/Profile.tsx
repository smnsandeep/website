import React from "react";
import Image from "next/image";
import Socials from "./Socials";

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
    <div className="flex flex-col w-screen h-screen items-center py-40 lg:py-[300px] dark:bg-gray-800">
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
    </div>
  );
};

export default Profile;

