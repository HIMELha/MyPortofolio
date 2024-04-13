function Contact() {
  return (
    <div className="px-[5%] maxWidth py-4 hero !h-full ">
      <div className="grid col-span-2 mb-6 py-2">
        <h1 className="text-3xl leading-12 text-center">
          <span className="text-[32px] headingText">Contact Me</span>
        </h1>
      </div>
      <img
        src="https://tailwindui.com/img/beams-basic.png"
        alt=""
        className="w-full h-screen absolute top-0 left-0 right-0 overflow-hidden -z-10"
      />
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-8">
        <div className="w-[98%] xs:w-[90%] sm:w-[520px] mx-auto mt-3">
          <form
            action=""
            className="flex flex-col gap-4 px-6 py-8 ssdow rounded-md border border-gray-300"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-[15px] font-medium text-slate-700 dark:text-slate-100"
              >
                Enter Your Name
              </label>
              <input
                type="text"
                placeholder="your name"
                className="px-3 py-2 mt-1 border border-slate-300 dark:bg-transparent rounded-sm focus:outline-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-[15px] font-medium text-slate-700 dark:text-slate-100"
              >
                Enter Your Email
              </label>
              <input
                type="text"
                placeholder="your email"
                className="px-3 py-2 mt-1 border border-slate-300 dark:bg-transparent rounded-sm focus:outline-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-[15px] font-medium text-slate-700 dark:text-slate-100"
              >
                Your message
              </label>
              <textarea
                type="text"
                placeholder="your message"
                className="px-3 py-2 mt-1 border h-[200px] dark:bg-transparent   border-slate-300 rounded-sm focus:outline-blue-400 wid"
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>

        <div className="w-[90%] xs:w-[80%] sm:w-[300px] mx-auto my-6">
          <h2 className="text-xl text-center font-medium text-slate-800 dark:text-slate-100">
            You also can find me here
          </h2>
          <div className="flex justify-center items-center gap-4 mt-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
