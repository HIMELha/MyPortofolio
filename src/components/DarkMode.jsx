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
    <button onClick={toggleDarkMode} className={`btn-auto sm:flex`}>
      {isDarkMode ? (
        <MdWbSunny style={{ fontSize: "17px" }} />
      ) : (
        <IoMoon style={{ fontSize: "17px" }} />
      )}
    </button>
  );
};

export default DarkModeToggle;
