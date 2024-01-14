
function Skills() {
  return (
    <div className="px-[3%] py-4 bg-gradient-to-tr h-full md:min-h-[90vh]  ">
      <div className="w-full mb-6">
        <h1 className="text-3xl leading-12 text-center">
          <span className="text-[32px] bg-clip-text font-medium text-transparent bg-gradient-to-br from-slate-800 to-gray-400 ">
            My Skills
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-8 gap-3 sm:gap-4 md:gap-8">
        <div className="card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            alt=""
            className="cardImage"
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-left text-2xl text-slate-800">HTML5</h2>
            <span className="text-[12px] sm:text-[13px] ">
              HTML is the core language for web content. It uses tags to
              structure forming the foundation of web pages.
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
            alt=""
            className="cardImage"
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-left text-2xl text-slate-800">CSS3</h2>
            <span className="text-[12px] sm:text-[13px] ">
              CSS, or Cascading Style Sheets, styles HTML elements for visually
              appealing web pages.
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src="https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu"
            alt=""
            className="cardImage"
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-left text-2xl text-slate-800">
              TailwindCSS 3.0
            </h2>
            <span className="text-[12px] sm:text-[13px] ">
              Tailwind CSS streamlines styling using utility classes for
              efficient and flexible web design.
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
            alt=""
            className="cardImage !w-[72px]"
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-left text-2xl text-slate-800">Bootstrap 5</h2>
            <span className="text-[12px] sm:text-[13px] ">
              Bootstrap is a Front-end framework for responsive web design,
              providing pre-designed components and a flexible grid system.
            </span>
          </div>
        </div>

        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"
            alt=""
            className="cardImage"
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-left text-2xl text-slate-800">
              Javascript ES13
            </h2>
            <span className="text-[12px] sm:text-[13px] ">
              JavaScript is a dynamic scripting language that adds interactivity
              to web pages, enabling client-side functionality.
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/jquery_logo_icon_167804.png"
            alt=""
            className="cardImage"
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-left text-2xl text-slate-800">Jquery 3.7</h2>
            <span className="text-[12px] sm:text-[13px] ">
              jQuery simplifies JavaScript tasks, offering a concise and
              efficient way to handle DOM manipulation and event handling on web
              pages.
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
            alt=""
            className="cardImage !w-[72px]"
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-left text-2xl text-slate-800">React 18</h2>
            <span className="text-[12px] sm:text-[13px] ">
              ReactJS is a JavaScript library for building dynamic user
              interfaces, providing a declarative and efficient way to create
              interactive web applications.
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png"
            alt=""
            className="cardImage !w-[72px]"
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-left text-2xl text-slate-800">
              PHP 8.2 <span className="btn">looking for 8.4 👀</span>
            </h2>
            <span className="text-[12px] sm:text-[13px] ">
              PHP is a server-side scripting language, empowering dynamic web
              content and enabling seamless server logic integration in web
              development.
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src="https://pngimg.com/d/mysql_PNG29.png"
            alt=""
            className="cardImage"
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-left text-2xl text-slate-800">MySQL 8.0.35</h2>
            <span className="text-[12px] sm:text-[13px] ">
              MySQL is a popular open-source relational database management
              system, crucial for storing and retrieving data in various web
              applications.
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"
            alt=""
            className="cardImage"
          />
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-left text-2xl text-slate-800">Laravel 10.35</h2>
            <span className="text-[12px] sm:text-[13px] ">
              Laravel is a PHP framework that simplifies web development,
              offering elegant syntax and built-in tools for efficient and
              modern PHP application building.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
