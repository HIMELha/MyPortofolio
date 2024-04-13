function Projects() {
  
  return (
    <div className="px-[5%] maxWidth py-4 hero !h-full relative">
      <div className="grid col-span-2 mb-6 py-2">
        <h1 className="text-3xl leading-12 text-center">
          <span className="text-[32px] headingText ">My Projects</span>
        </h1>
      </div>
      <img
        src="https://tailwindui.com/img/beams-basic.png"
        alt=""
        className="w-full h-screen absolute top-0 left-0 right-0 overflow-hidden -z-10"
      />
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-5 md:gap-7 lg:gap-7">
        <div className="project">
          <img
            src="https://i.ibb.co/ThzymtS/Thank-You-For-view-my-all-projects.png"
            alt=""
            className="w-full rounded-tr-md lg:max-h-[240px]"
          />
          <div className="flex flex-col px-3 py-2 mb-2">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100">
              RefferAi - refferal system
            </h2>

            <div className="flex gap-2 justify-start items-center flex-wrap mt-2 mb-12">
              <span className="tags bg-red-500 text-white">
                <i className="fa-brands fa-html5 icon"></i>HTML
              </span>
              <span className="tags bg-blue-500 text-white">
                <i className="fa-brands fa-css3 icon"></i>TailwindCSS
              </span>

              <span className="tags bg-[#8040e7] text-white">
                <i className="fa-brands fa-php icon"></i>PHP
              </span>

              <span className="tags bg-orange-600 text-white">
                <i className="fa-solid fa-database icon"></i>MySQL
              </span>
            </div>
            <div className="flex gap-4 justify-center items-center flex-wrap absolute bottom-2 left-0 right-0 ">
              <button
                className="btn !rounded-full"
                onClick={() => window.open("https://refferai.postbd.xyz/")}
              >
                <i className="fa-solid fa-up-right-from-square icon"></i>Preview
              </button>
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://github.com/HIMELha/refferAi")
                }
              >
                <i className="fa-brands fa-github icon"></i>Github
              </button>
            </div>
          </div>
        </div>
        <div className="project">
          <img
            src="https://i.ibb.co/4dnsbfx/Thank-You-For-view-my-all-projects-1.png"
            alt=""
            className="w-full rounded-tr-md lg:max-h-[240px]"
          />
          <div className="flex flex-col px-3 py-2 mb-2">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100">
              LaraShop - simple ecommerce website
            </h2>

            <div className="flex gap-2 justify-start items-center flex-wrap mt-2 mb-12">
              <span className="tags bg-red-500 text-white">
                <i className="fa-brands fa-html5 icon"></i>HTML
              </span>
              <span className="tags bg-blue-500 text-white">
                <i className="fa-brands fa-css3 icon"></i>TailwindCSS
              </span>

              <span className="tags bg-yellow-600 text-white">
                <i className="fa-brands fa-node-js icon"></i>Javascript
              </span>
              <span className="tags bg-yellow-500 text-white">
                <i className="fa-brands fa-js icon"></i>Jquery
              </span>
              <span className="tags bg-red-500 text-white">
                <i className="fa-brands fa-laravel icon"></i>Laravel
              </span>
              <span className="tags bg-orange-600 text-white">
                <i className="fa-solid fa-database icon"></i>MySQL
              </span>
            </div>
            <div className="flex gap-4 justify-center items-center flex-wrap absolute bottom-2 left-0 right-0 ">
              <button
                className="btn !rounded-full"
                onClick={() => window.open("https://postbd.xyz/pay_commerce/")}
              >
                <i className="fa-solid fa-up-right-from-square icon"></i>Preview
              </button>
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://github.com/HIMELha/Laravel_Ecommerce")
                }
              >
                <i className="fa-brands fa-github icon"></i>Github
              </button>
            </div>
          </div>
        </div>

        <div className="project">
          <img
            src="https://i.ibb.co/s69RFmd/Untitled-design.png"
            alt=""
            className="w-full rounded-tr-md lg:max-h-[240px]"
          />
          <div className="flex flex-col px-3 py-2 mb-2">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100">
              React & Laravel CRUD App
            </h2>

            <div className="flex gap-2 justify-start items-center flex-wrap mt-2 mb-12">
              <span className="tags bg-red-500 text-white">
                <i className="fa-brands fa-html5 icon"></i>HTML
              </span>
              <span className="tags bg-blue-500 text-white">
                <i className="fa-brands fa-css3 icon"></i>TailwindCSS
              </span>
              <span className="tags bg-red-500 text-white">
                <i className="fa-brands fa-laravel icon"></i>Laravel
              </span>
              <span className="tags bg-sky-500 text-white">
                <i className="fa-brands fa-react icon"></i>ReactJS
              </span>
              <span className="tags bg-orange-600 text-white">
                <i className="fa-solid fa-database icon"></i>MySQL
              </span>
            </div>
            <div className="flex gap-4 justify-center items-center flex-wrap absolute bottom-2 left-0 right-0 ">
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://react-crud-lilac.vercel.app/")
                }
              >
                <i className="fa-solid fa-up-right-from-square icon"></i>Preview
              </button>
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://github.com/HIMELha/ReactCrud")
                }
              >
                <i className="fa-brands fa-github icon"></i>Github
              </button>
            </div>
          </div>
        </div>

        <div className="project">
          <img
            src="https://i.ibb.co/SBY5Kq7/Untitled-design-6.png"
            alt=""
            className="w-full rounded-tr-md lg:max-h-[240px]"
          />
          <div className="flex flex-col px-3 py-2 mb-2">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100">
              Laravel blog website
            </h2>

            <div className="flex gap-2 justify-start items-center flex-wrap mt-2 mb-12">
              <span className="tags bg-red-500 text-white">
                <i className="fa-brands fa-html5 icon"></i>HTML
              </span>
              <span className="tags bg-red-500 text-white">
                <i className="fa-brands fa-laravel icon"></i>Laravel
              </span>
              <span className="tags bg-blue-500 text-white">
                <i className="fa-brands fa-css3 icon"></i>TailwindCSS
              </span>
              <span className="tags bg-orange-600 text-white">
                <i className="fa-solid fa-database icon"></i>MySQL
              </span>
            </div>
            <div className="flex gap-4 justify-center items-center flex-wrap absolute bottom-2 left-0 right-0 ">
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://postbd.xyz/laratail/public/home")
                }
              >
                <i className="fa-solid fa-up-right-from-square icon"></i>Preview
              </button>
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://github.com/HIMELha/Laratail")
                }
              >
                <i className="fa-brands fa-github icon"></i>Github
              </button>
            </div>
          </div>
        </div>

        <div className="project">
          <img
            src="https://i.ibb.co/YcbSsxz/Untitled-design-5.png"
            alt=""
            className="w-full rounded-tr-md lg:max-h-[240px]"
          />
          <div className="flex flex-col px-3 py-2 mb-2">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100">
              BookStore - landing page for bookshop
            </h2>

            <div className="flex gap-2 justify-start items-center flex-wrap mt-2 mb-12">
              <span className="tags bg-red-500 text-white">
                <i className="fa-brands fa-html5 icon"></i>HTML
              </span>
              <span className="tags bg-blue-500 text-white">
                <i className="fa-brands fa-css3 icon"></i>Vanila CSS
              </span>
              <span className="tags bg-yellow-600 text-white">
                <i className="fa-brands fa-js icon"></i>Javascript
              </span>
              <span className="tags bg-purple-500 text-white">
                <i className="fa-solid fa-sliders icon"></i>Sliders
              </span>
            </div>

            <div className="flex gap-4 justify-center items-center flex-wrap absolute bottom-2 left-0 right-0 ">
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://himelha.github.io/BookStore/")
                }
              >
                <i className="fa-solid fa-up-right-from-square icon"></i>Preview
              </button>
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://github.com/HIMELha/BookStore")
                }
              >
                <i className="fa-brands fa-github icon"></i>Github
              </button>
            </div>
          </div>
        </div>

        <div className="project">
          <img
            src="https://i.ibb.co/wBT4sGc/Untitled-design-2.png"
            alt=""
            className="w-full rounded-tr-md lg:max-h-[240px]"
          />
          <div className="flex flex-col px-3 py-2 mb-2">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100">
              Vehicle website landing page
            </h2>

            <div className="flex gap-2 justify-start items-center flex-wrap mt-2 mb-12">
              <span className="tags bg-red-500 text-white">
                <i className="fa-brands fa-html5 icon"></i>HTML
              </span>
              <span className="tags bg-blue-500 text-white">
                <i className="fa-brands fa-css3 icon"></i>Vanila CSS
              </span>
              <span className="tags bg-yellow-600 text-white">
                <i className="fa-brands fa-js icon"></i>Javascript
              </span>
            </div>

            <div className="flex gap-4 justify-center items-center flex-wrap absolute bottom-2 left-0 right-0 ">
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open(
                    "https://himelha.github.io/vehicles-Landing-Page/"
                  )
                }
              >
                <i className="fa-solid fa-up-right-from-square icon"></i>Preview
              </button>
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open(
                    "https://github.com/HIMELha/vehicles-Landing-Page"
                  )
                }
              >
                <i className="fa-brands fa-github icon"></i>Github
              </button>
            </div>
          </div>
        </div>

        <div className="project">
          <img
            src="https://i.ibb.co/g97vrs3/Untitled-design-7.png"
            alt=""
            className="w-full rounded-tr-md lg:max-h-[240px]"
          />
          <div className="flex flex-col px-3 py-2 mb-2">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100">
              Vertax Portfolio
            </h2>

            <div className="flex gap-2 justify-start items-center flex-wrap mt-2 mb-12">
              <span className="tags bg-red-500 text-white">
                <i className="fa-brands fa-html5 icon"></i>HTML
              </span>
              <span className="tags bg-blue-500 text-white">
                <i className="fa-brands fa-css3 icon"></i>Vanila CSS
              </span>
              <span className="tags bg-yellow-600 text-white">
                <i className="fa-brands fa-js icon"></i>Javascript
              </span>
            </div>

            <div className="flex gap-4 justify-center items-center flex-wrap absolute bottom-2 left-0 right-0 ">
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://himelha.github.io/portfolio/")
                }
              >
                <i className="fa-solid fa-up-right-from-square icon"></i>Preview
              </button>
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://github.com/HIMELha/portfolio")
                }
              >
                <i className="fa-brands fa-github icon"></i>Github
              </button>
            </div>
          </div>
        </div>

        <div className="project">
          <img
            src="https://i.ibb.co/99Gs6Wr/Untitled-design-4.png"
            alt=""
            className="w-full rounded-tr-md lg:max-h-[240px]"
          />

          <div className="flex flex-col px-3 py-2 mb-2">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100">
              LTEAdmin - admin panel template
            </h2>

            <div className="flex gap-2 justify-start items-center flex-wrap mt-2 mb-12">
              <span className="tags bg-red-500 text-white">
                <i className="fa-brands fa-html5 icon"></i>HTML
              </span>
              <span className="tags bg-blue-500 text-white">
                <i className="fa-brands fa-css3 icon"></i>TailwindCSS
              </span>
              <span className="tags bg-yellow-600 text-white">
                <i className="fa-brands fa-js icon"></i>Javascript
              </span>
            </div>

            <div className="flex gap-4 justify-center items-center flex-wrap absolute bottom-2 left-0 right-0 ">
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://himelha.github.io/adminLte/src/")
                }
              >
                <i className="fa-solid fa-up-right-from-square icon"></i>Preview
              </button>
              <button
                className="btn !rounded-full"
                onClick={() =>
                  window.open("https://github.com/HIMELha/adminLte")
                }
              >
                <i className="fa-brands fa-github icon"></i>Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
