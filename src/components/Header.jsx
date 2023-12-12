import {Link} from 'react-router-dom'
function Header() {
  return (
    <header className="px-[5%] py-[10px] flex justify-between items-center shadow-sm border">
      <Link
        to="/"
        className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-tr from-blue-700 to-slate-800"
        style={{ fontFamily: "Jost" }}
      >
        Himel Hasan
      </Link>

      <ul className=" items-center hidden sm:flex gap-4">
        <li>
          <Link
            to="/about"
            className="px-2 py-[6px] text-gray-700 font-medium hover:text-slate-600"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="px-2 py-[6px] text-gray-700 font-medium hover:text-slate-600"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="px-2 py-[6px] text-gray-700 font-medium hover:text-slate-600"
          >
            Projects
          </Link>
        </li>
      </ul>
      <button className="btn">
        <Link to="/contact">Contact Me</Link>
      </button>
    </header>
  );
}

export default Header;
