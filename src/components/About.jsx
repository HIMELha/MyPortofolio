import { useNavigate } from "react-router-dom";
import prfileImage from "../assets/image.jpg";
function About() {
  const history = useNavigate();

  const navigate = (url) => {
    history(url);
  };

  const redirectClient = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="px-[5%] maxWidth py-4 hero !h-full grid lg:grid-cols-2 items-start justify-center">
      <div className="grid col-span-2 mb-6 py-2">
        <h1 className="text-3xl leading-12 text-center">
          <span className="text-[32px] headingText ">About Me</span>
        </h1>
      </div>
      <div className="flex col-span-2 lg:col-span-1 sm:w-[600px] lg:max-w-full sm:mx-auto mt-8 lg:mt-0 justify-start !items-start flex-col order-1 ">
        <h1 className="text-xl leading-12 mt-1 ">
          <span className="text-[22px] font-medium textGradient">
            I&apos;m Himel Hasan
          </span>
        </h1>
        <p className="text-[17px] text-slate-800 dark:text-gray-200 mt-1">
          A passionate Laravel developer based in Bangladesh. With a strong
          foundation in web development, I specialize in creating robust and
          scalable applications using the Laravel framework.
        </p>
        <span className="text-[22px] font-medium textGradient mt-3">
          What I Do
        </span>
        <p className="text-[17px] text-slate-800 dark:text-gray-200 mt-1">
          I love turning ideas into reality through code. My expertise lies in
          crafting elegant solutions with Laravel, whether it&apos;s building
          dynamic websites, RESTful APIs, or custom web applications.
        </p>

        <span className="text-[22px] font-medium textGradient mt-3">
          Why Choose Me?
        </span>
        <p className="text-[17px] text-slate-800 dark:text-gray-200 mt-1">
          <b>Laravel Enthusiast:</b> I have a deep appreciation for the
          simplicity and power that Laravel brings to web development. <br />
          <b>Collaborative Team Player:</b> I thrive in collaborative
          environments and value teamwork to deliver high-quality results.
        </p>

        {/* <span className="px-2 py-[6px] text-[14px] rounded-sm mt-3 text-blue-900 bg-blue-100 border border-sky-400">
          <i className="fa-solid fa-triangle-exclamation text-blue-600 mr-1"></i>
          I&apos;m facing financial challenges, I&apos;m a dedicated Laravel
          developer delivering efficient code. Hiring me brings technical
          proficiency and a committed partner invested in your project&apos;s
          success. Let&apos;s connect and achieve your goals together. <br />{" "}
          I&apos;m busy now to escape from the toxic society and toxic peoples
        </span> */}

        <div className="flex-center mt-5 mx-auto !gap-3">
          <button className="btn mr-3" onClick={() => navigate("/projects")}>
            Discover Innovation
          </button>
          <button className="btn-outline " onClick={() => navigate("/contact")}>
            Get Started
          </button>
        </div>
      </div>

      <div className="grid col-span-2 lg:col-span-1 justify-center relative order-0 ">
        <img
          src={prfileImage}
          alt=""
          className="rounded-md w-[300px] h-[300px] md:w-[380px] md:h-[380px]  shadow-slate-500 shadow-md borderN"
        />
        <div className="flex justify-center gap-4 mt-5 md:mt-7 lg:mt-10">
          <button
            onClick={() =>
              redirectClient("https://www.facebook.com/webhimel032")
            }
            className="social-btn bg-blue-500 border hover:bg-white hover:text-blue-500 borderN"
          >
            <i className="fa-brands fa-facebook text-xl"></i>
          </button>
          <button
            onClick={() =>
              redirectClient("https://www.linkedin.com/in/himelhasan002")
            }
            className="social-btn bg-sky-500 border hover:bg-white hover:text-sky-500 borderN"
          >
            <i className="fa-brands fa-linkedin text-xl"></i>
          </button>
          <button
            onClick={() => redirectClient("https://wa.me/8801747760521")}
            className="social-btn bg-green-600 border hover:bg-white hover:text-green-500 borderN"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
          </button>
          <button
            onClick={() => redirectClient("https://github.com/HIMELha")}
            className="social-btn bg-slate-700 border hover:bg-white hover:text-slate-500 borderN"
          >
            <i className="fa-brands fa-github text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
