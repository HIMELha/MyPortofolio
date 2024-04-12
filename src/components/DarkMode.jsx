import { useState } from "react";
import { MdWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

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
      className={`ease-in w-[40px] h-[40px] flex items-center justify-center rounded hover:ring-[5px] hover:ring-slate-200 text-[20px] border ${
        isDarkMode
          ? "bg-transparent border-white text-white"
          : " bg-white text-black border border-gray-700"
      }`}
    >
      {isDarkMode ? (
        <MdWbSunny style={{ fontSize: "17px" }} />
      ) : (
        <IoMoon style={{ fontSize: "17px" }} />
      )}
    </button>
  );
};

export default DarkModeToggle;
