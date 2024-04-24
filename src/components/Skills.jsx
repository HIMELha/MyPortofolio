import React, { useState } from "react";
import Cards from "./Cards"; // Import your Cards component here

function Skills() {
  const skills = [
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      title: "HTML",
      category: "web",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
      title: "CSS",
      category: "web",
    },
    {
      imageUrl: "https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu",
      title: "TailwindCSS",
      category: "web",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      title: "Bootstrap ",
      category: "web",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
      title: "Javascript",
      category: "web",
    },
    {
      imageUrl:
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/jquery_logo_icon_167804.png",
      title: "Jquery",
      category: "web",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      title: "React",
      category: "web",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png",
      title: "PHP",
      category: "web",
    },
    {
      imageUrl: "https://pngimg.com/d/mysql_PNG29.png",
      title: "MySQL",
      category: "web",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
      title: "Laravel",
      category: "web",
    },

    {
      imageUrl:
        "https://cdn3d.iconscout.com/3d/free/thumb/free-canva-9234654-7516879.png?f=webp",
      title: "Canva",
      category: "tools",
    },

    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
      title: "Notion",
      category: "tools",
    },
  ];

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <div className="px-[5%] maxWidth py-4 hero !h-full">
      <div className="grid col-span-2 mb-6 py-2">
        <h1 className="text-3xl leading-12 text-center">
          <span className="text-[32px] headingText">My Skills</span>
        </h1>
      </div>
      <div className="mb-5 flex justify-center flex-wrap items-center gap-3">
        <button
          className={`btn-outline transition ${
            filter === "all"
              ? "bg-slate-800 !text-white dark:bg-white dark:border-white dark:!text-slate-900"
              : ""
          }`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>

        <button
          className={`btn-outline transition ${
            filter === "web"
              ? "bg-slate-800 !text-white dark:bg-white dark:border-white dark:!text-slate-900"
              : ""
          }`}
          onClick={() => handleFilterChange("web")}
        >
          Web Development
        </button>

        <button
          className={`btn-outline transition ${
            filter === "tools"
              ? "bg-slate-800 !text-white dark:bg-white dark:border-white dark:!text-slate-900"
              : ""
          }`}
          onClick={() => handleFilterChange("tools")}
        >
          Productivity Tools
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-6 md:gap-8">
        {filteredSkills.map((tech, index) => (
          <Cards key={index} imageUrl={tech.imageUrl} title={tech.title} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
