import { useState } from "react";
import http from "../http";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // State to track loading status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading to true when request starts

    try {
      const response = await http.post("/send/email", formData);

      if (response.status !== 200) {
        toast.warning(response.data.errors[0], {
          autoClose: 5000, // auto dismiss after 5 seconds
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.success("Email sent successfully", {
          autoClose: 5000, // auto dismiss after 5 seconds
          position: toast.POSITION.TOP_CENTER,
        });
        setFormData({ subject: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("Oops! Something went wrong", {
        autoClose: 5000, // auto dismiss after 5 seconds
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  };

  const redirectClient = (url) => {
    window.open(url, "_blank");
  };

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
        <div className="w-[98%] xs:w-[90%] sm:w-[520px] mx-auto mt-3 order-2 sm:order-1">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 px-6 py-8 ssdow rounded-md border border-gray-300"
          >
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[15px] font-medium text-slate-700 dark:text-slate-100"
              >
                Enter Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="px-3 py-2 mt-1 border border-slate-300 dark:bg-transparent rounded-sm focus:outline-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-[15px] font-medium text-slate-700 dark:text-slate-100"
              >
                Email subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Email subject"
                value={formData.subject}
                onChange={handleChange}
                className="px-3 py-2 mt-1 border border-slate-300 dark:bg-transparent rounded-sm focus:outline-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-[15px] font-medium text-slate-700 dark:text-slate-100"
              >
                Your message
              </label>
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="px-3 py-2 mt-1 border h-[200px] dark:bg-transparent border-slate-300 rounded-sm focus:outline-blue-400 wid"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn text-center"
              disabled={loading}
            >
              {loading ? (
                <div className="text-center">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-6 h-6 text-gray-200 animate-spin dark:text-slate-100 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>

        <div className="w-[90%] xs:w-[80%] md:max-w-[500px] px-1 sm:px-3 mx-auto my-6 order-1 sm:order-2">
          <h2 className="text-xl text-start font-medium text-slate-800 dark:text-slate-100">
            Seeking assistance with your project? As a dedicated and proficient
            developer, I offer comprehensive services including project
            completion, task execution, and optimization. Feel free to reach out
            to me for any of your needs.
          </h2>

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
    </div>
  );
};

export default Contact;
