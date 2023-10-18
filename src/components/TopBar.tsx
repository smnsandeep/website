import React, { useState } from "react";
import ToggleButton from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";

// Create props interface with a callback
type TopBarProps = {
  requestShowToast: (msg: string, timer: number) => void;
};

// Create a TopBar component with a callback
const TopBar: React.FC<TopBarProps> = ({ requestShowToast }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAppButtonClick = () => {
    console.log("App Button Clicked");
    requestShowToast("In progress", 3000);
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 p-4 flex justify-between lg:justify-end lg:items-center shadow-md`}
    >
      <button
        onClick={toggleMenu}
        className={`lg:hidden text-gray-600 dark:text-white text-3xl transform transition-transform duration-300 ${
          isMenuOpen ? "rotate-90" : "rotate-0"
        }`}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      <div />

      <div className="space-x-4">
        <ul className="hidden lg:flex">
          <li
            className={`text-gray-600 dark:text-white hover:text-orange-500 px-4 text-shadow-2xl font-thin`}
          >
            Home
          </li>
          <li
            className={`text-gray-600 dark:text-white hover:text-orange-500 px-4 text-shadow-2xl font-thin`}
          >
            About
          </li>
          <li
            className={`text-gray-600 dark:text-white hover:text-orange-500 px-4 text-shadow-2xl font-thin`}
          >
            Contact
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className={`lg:hidden absolute top-16 left-0 w-full transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } hover:text-orange-500 px-4 text-shadow-2xl font-thin bg-white dark:bg-gray-800`}
        >
          <ul>
            <li
              className={`text-gray-600 dark:text-white hover:text-orange-500 px-4 py-4 text-shadow-2xl font-bold`}
            >
              Home
            </li>
            <li
              className={`text-gray-600 dark:text-white hover:text-orange-500 px-4 py-4 text-shadow-2xl font-bold`}
            >
              About
            </li>
            <li
              className={`text-gray-600 dark:text-white hover:text-orange-500 px-4 py-4 text-shadow-2xl font-bold`}
            >
              Contact
            </li>
          </ul>
        </div>
      )}

      <div className="flex space-x-4">
        <ToggleButton />

        <button
          className={`bg-orange-500 text-white px-4 py-2 rounded-full`}
          onClick={handleAppButtonClick}
        >
          <FontAwesomeIcon icon={faThLarge} className="mr-2" />
          Apps
        </button>
      </div>
    </div>
  );
};

export default TopBar;
