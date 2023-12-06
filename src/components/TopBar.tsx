import React, { useState } from "react";
import ToggleButton from "./ThemeToggle";

const TopBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <a
              href="https://forms.gle/gVKEDgZ1rpDLjtVR8"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
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
              Contact
            </li>
          </ul>
        </div>
      )}

      <div className="flex space-x-4">
        <ToggleButton />

        <a href="https://toolkix.com" target="_blank" rel="noreferrer">
          <button className={`bg-orange-500 text-white px-4 py-2 rounded-full`}>
            ToolKix
          </button>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
