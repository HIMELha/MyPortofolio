import Cards from "./Cards";

function Skills() {
  const skills = [
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      title: "HTML5",
      description:
        "HTML is the core language for web content. It uses tags to structure forming the foundation of web pages.",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
      title: "CSS3",
      description:
        "CSS, or Cascading Style Sheets, styles HTML elements for visually appealing web pages.",
    },
    {
      imageUrl: "https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu",
      title: "TailwindCSS 3.0",
      description:
        "Tailwind CSS streamlines styling using utility classes for efficient and flexible web design.",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      title: "Bootstrap 5",
      description:
        "Bootstrap is a Front-end framework for responsive web design, providing pre-designed components and a flexible grid system.",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
      title: "Javascript ES13",
      description:
        "JavaScript is a dynamic scripting language that adds interactivity to web pages, enabling client-side functionality.",
    },
    {
      imageUrl:
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/jquery_logo_icon_167804.png",
      title: "Jquery 3.7",
      description:
        "jQuery simplifies JavaScript tasks, offering a concise and efficient way to handle DOM manipulation and event handling on web pages.",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      title: "React 18",
      description:
        "ReactJS is a JavaScript library for building dynamic user interfaces, providing a declarative and efficient way to create interactive web applications.",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png",
      title: "PHP 8.2",
      description:
        "PHP is a server-side scripting language, empowering dynamic web content and enabling seamless server logic integration in web development.",
    },
    {
      imageUrl: "https://pngimg.com/d/mysql_PNG29.png",
      title: "MySQL 8.0.35",
      description:
        "MySQL is a popular open-source relational database management system, crucial for storing and retrieving data in various web applications.",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
      title: "Laravel 10.35",
      description:
        "Laravel is a PHP framework that simplifies web development, offering elegant syntax and built-in tools for efficient and modern PHP application building.",
    },
  ];

  return (
    <div className="px-[5%] maxWidth py-4 hero !h-full">
      <div className="grid col-span-2 mb-6 py-2">
        <h1 className="text-3xl leading-12 text-center">
          <span className="text-[32px] headingText ">My Skills</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-8">
        {skills.map((tech, index) => (
          <Cards
            key={index}
            imageUrl={tech.imageUrl}
            title={tech.title}
            description={tech.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
