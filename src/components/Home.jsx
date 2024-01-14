import prfileImage from "../assets/image.jpg";
function Home() {

  return (
    <div className="px-[3%] py-4 hero   grid md:grid-cols-2 justify-center items-center ">
      <div className="flex justify-start flex-col order-1 md:order-0">
        <h1 className="text-3xl leading-12 mb-2">
          <span className="mb-1">
            Hey there 👋 <br />
          </span>
          <span className="text-[40px] bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-gray-400 ">
            I&apos;m Himel Hasan
          </span>
        </h1>
        <p className="text-[18px] text-slate-800 mt-3">
          I can develop and build websites using power of Laravel , ReactJS and
          TailwindCSS 💪
        </p>

        <div className="flex gap-4 mt-8">
          <button className="btn w-[140px] disabled">
            <i className="fa-solid fa-handshake-angle mr-2"></i>Hire me
          </button>
          <button className="btn w-[140px] disabled">
            <i className="fa-regular fa-file-lines mr-2"></i>Download CV
          </button>
        </div>
      </div>

      <div className="grid col-span-1 justify-center relative order-0 md:order-1">
        <img
          src={prfileImage}
          alt=""
          className="rounded-md w-[300px] h-[300px] md:w-[380px] md:h-[380px] my-10 md:my-0 shadow-slate-500 shadow-md borderN"
        />
      </div>
    </div>
  );
}

export default Home;
