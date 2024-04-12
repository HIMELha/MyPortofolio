import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkMode";
function Header() {
  const [nav, setNav] = useState(false);
 
  
  return (
    <header className="px-[5%] py-[10px] flex justify-between items-center shadow shadow-sky-300  dark:text-white dark:bg-slate-900">
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
        <ul className="flex flex-col justify-center items-center gap-8 bg-slate-800 overflow-hidden fixed top-0 bottom-0 left-0 right-0 z-10 sm:hidden">
          <button
            onClick={() => setNav(false)}
            className="social-btn bg-slate-600 !rounded-full hover:bg-zinc-800  hover:border sm:hidden absolute top-4 right-4"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <li>
            <Link
              onClick={() => setNav(false)}
              to="/about"
              className="px-2 py-[6px] text-xl text-left text-gray-200 font-medium hover:text-slate-300"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(false)}
              to="/skills"
              className="px-2 py-[6px] text-xl text-left text-gray-200 font-medium hover:text-slate-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(false)}
              to="/projects"
              className="px-2 py-[6px] text-xl text-left text-gray-200 font-medium hover:text-slate-300"
            >
              Projects
            </Link>
          </li>
        </ul>
      )}

      <div className="flex gap-4 sm:gap-3">
        <button className="btn ">
          <Link to="/contact">Contact Me</Link>
        </button>

        <button
          onClick={() => setNav(true)}
          className="social-btn bg-slate-600 hover:bg-slate-800 sm:hidden"
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>

        <div id="ModeToggler">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
