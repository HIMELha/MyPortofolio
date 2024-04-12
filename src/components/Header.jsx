import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkMode";

function Header() {
  const [nav, setNav] = useState(false);

  return (
    <div className="shadow shadow-sky-300 dark:text-white dark:bg-slate-800">
      <header className="px-[5%] py-2 flex justify-between items-center maxWidth">
        <Link
          to="/"
          className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-tr from-blue-700 to-slate-800 dark:text-sky-300"
          style={{ fontFamily: "Jost" }}
        >
          Himel Hasan
        </Link>

        <ul className=" items-center hidden sm:flex gap-4">
          <li>
            <Link
              to="/about"
              className="px-2 py-[6px] text-gray-700 font-medium dark:text-blue-300 dark:hover:text-slate-400 hover:text-slate-700"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="px-2 py-[6px] text-gray-700 font-medium dark:text-blue-300 dark:hover:text-slate-400 hover:text-slate-700"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="px-2 py-[6px] text-gray-700 font-medium dark:text-blue-300 dark:hover:text-slate-400  hover:text-slate-700"
            >
              Projects
            </Link>
          </li>
        </ul>

        {nav && (
          <ul className="flex flex-col justify-center items-center gap-8 bg-white dark:bg-gradient-to-bl  dark:to-slate-800 overflow-hidden fixed top-0 bottom-0 left-0 right-0 z-10 sm:hidden">
            <button
              onClick={() => setNav(false)}
              className="btn-outline sm:hidden absolute top-2 right-[5%] w-[42px] h-[42px]"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <li>
              <Link
                onClick={() => setNav(false)}
                to="/about"
                className="px-2 py-[6px] text-xl text-left hover:text-slate-700 dark:text-gray-200 font-medium dark:hover:text-slate-300"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNav(false)}
                to="/skills"
                className="px-2 py-[6px] text-xl text-left hover:text-slate-700 dark:text-gray-200 font-medium dark:hover:text-slate-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNav(false)}
                to="/projects"
                className="px-2 py-[6px] text-xl text-left hover:text-slate-700 dark:text-gray-200 font-medium dark:hover:text-slate-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        )}

        <div className="flex gap-4 sm:gap-3">
          <button className="btn !py-[6px]">
            <Link to="/contact">Contact Me</Link>
          </button>
          <DarkModeToggle />
          <button
            onClick={() => setNav(true)}
            className="btn-outline !border-[1px] shadow sm:hidden"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
