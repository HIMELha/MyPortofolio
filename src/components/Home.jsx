import { useNavigate } from "react-router-dom";
import prfileImage from "../assets/profile.png";
import { FaToolbox } from "react-icons/fa6";

function Home() {
  const history = useNavigate();

  const navigate = (url) => {
    history(url);
  };

  return (
    <div className="px-[5%] py-4 hero grid md:grid-cols-2 justify-center items-center gap-8 sm:gap-0 maxWidth">
      <img
        src="https://tailwindui.com/img/beams-basic.png"
        alt=""
        className="w-full h-[100vh] absolute top-0 left-0 right-0 overflow-hidden -z-10"
      />
      <div className="flex justify-start flex-col order-1 md:order-0 relative ">
        <span className="mb-3 pb-3 text-[25px] text-slate-800 dark:text-blue-200">
          Hey there 👋 <br />
        </span>
        <h1 className="text-3xl leading-12 mb-2 flex gap-2">
          <span className="headingText">I&apos;m Himel Hasan</span>
        </h1>
        <p className="text-[18px] text-slate-800 mt-3 dark:text-white">
          A passionate web developer specializing in Laravel, ReactJS, and
          Tailwind CSS.
        </p>
        <p className="text-[18px] text-slate-800 mt-3 dark:text-white">
          I&apos;m passionate about crafting elegant and efficient solutions for
          web development projects.
        </p>

        {/* <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
          <button className="social-btn bg-blue-500">
            <i className="fa-brands fa-facebook  text-xl"></i>
          </button>
          <button className="social-btn bg-sky-500">
            <i className="fa-brands fa-twitter text-xl"></i>
          </button>
          <button className="social-btn bg-green-600">
            <i className="fa-brands fa-whatsapp text-xl"></i>
          </button>

          <button className="social-btn bg-slate-700">
            <i className="fa-brands fa-github text-xl"></i>
          </button>
        </div> */}

        <div className="flex gap-4 mt-4 mx-auto md:mx-0">
          <button
            onClick={() => navigate("/contact")}
            className="btn w-[140px] flex flex-row justify-center items-center gap-2 disabled"
          >
            <FaToolbox /> <p>Hire me</p>
          </button>
          <button className="btn-outline w-[140px] disabled">
            <i className="fa-regular fa-file-lines mr-2"></i>Download CV
          </button>
        </div>
      </div>

      <div className="grid col-span-1 justify-center md:justify-end relative order-0 md:order-1 my-8 md:mb-0">
        <img
          src={prfileImage}
          alt=""
          className="rounded-full w-[300px] h-[300px] md:w-[380px] md:h-[380px] md:my-0 shadow-sky-200 dark:shadow-md dark:shadow-sky-400"
        />
      </div>

      {/* <div className="absolute">
            Social Media
      </div> */}
    </div>
  );
}

export default Home;
