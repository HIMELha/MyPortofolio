import { useState } from "react";

const darkMode = localStorage.getItem("darkMode") === "true";
document.documentElement.classList.toggle("dark", darkMode);

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(darkMode);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("darkMode", newMode); // Save preference in localStorage
        document.documentElement.classList.toggle("dark", newMode);
    };

    return (
      <button
        onClick={toggleDarkMode}
        className={`ease-in w-[40px] h-[40px] flex-center rounded-full text-[16px] ${
          isDarkMode
            ? "bg-black text-white"
            : " bg-white !text-black border border-gray-700 "
        }`}
      >
        {isDarkMode ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </button>
    );
};

export default DarkModeToggle;