import prfileImage from "../assets/image.jpg";
import {useState} from 'react';
function Home() {
  const [tank, setTank] = useState(false);

  return (
    <div className="px-[3%] py-4 hero   grid md:grid-cols-2 justify-center items-center ">
      <div className="flex justify-start flex-col order-1 md:order-0">
        <h1 className="text-3xl leading-12 ">
          Hey there 👋 <br />
          <span className="text-[40px] bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-gray-400 ">
            I&apos;m Himel Hasan
          </span>
        </h1>
        <p className="text-[18px] text-slate-800 mt-3">
          I develop and build websites using power of Laravel , ReactJS and TailwindCSS
        </p>

        <div className="flex gap-4 mt-8">
          <button className="btn w-[140px] ">
            <i className="fa-solid fa-handshake-angle mr-2"></i>Hire me
          </button>
          <button className="btn w-[140px] ">
            <i className="fa-regular fa-file-lines mr-2"></i>Download CV
          </button>
        </div>
      </div>

      <div className="grid col-span-1 justify-center relative order-0 md:order-1">
        <div className="box absolute top-[10px] right-8 bg-sky-500 border w-10 h-10 rounded-full shadow-md easeIn"></div>
        <div className="box absolute top-[10px] right-8 bg-sky-500 border w-10 h-10 rounded-full shadow-md easeIn"></div>

        <img
          src={prfileImage}
          alt=""
          className="rounded-md w-[300px] h-[300px] md:w-[380px] md:h-[380px] my-10 md:my-0 shadow-slate-500 shadow-md borderN"
        />
        <div
          className="box absolute !bottom-[100px] left-10 w-8 h-0 
  border-l-[25px] border-l-transparent
  border-t-[35px] border-t-red-600
  border-r-[25px] border-r-transparent  easeIn cursor-crosshair"
          title="let's destroy nazi terrorists vehicle "
          onMouseOver={() => setTank(true)}
          onMouseLeave={() => setTank(false)}
        ></div>
        {tank && (
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/652862db5de39cfab844f591/0x0.jpg?format=jpg&crop=1360,765,x0,y155,safe&height=600&width=1200&fit=bounds"
            alt=""
            className="box absolute top-[50px] left-9 w-[60px] "
          />
        )}
      </div>
    </div>
  );
}

export default Home;
