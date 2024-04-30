import { useState } from "react";

function Projects() {
  const projects = [
    {
      title: "React & Laravel CRUD App",
      imageUrl: "https://i.ibb.co/s69RFmd/Untitled-design.png",
      category: "fullstack",
      tags: ["HTML", "TailwindCSS", "Laravel", "ReactJS", "MySQL"],
      previewLink: "https://taskappe.vercel.app/",
      githubLink: "https://github.com/HIMELha/ReactCrud",
    },
    {
      title: "LotoBD - simple ecommerce website",
      imageUrl:
        "https://i.ibb.co/4dnsbfx/Thank-You-For-view-my-all-projects-1.png",
      category: "fullstack",
      tags: ["HTML", "TailwindCSS", "Jquery", "Laravel", "MySQL"],
      previewLink: "https://postbd.xyz/pay_commerce/",
      githubLink: "https://github.com/HIMELha/Laravel_Ecommerce",
    },
    {
      title: "AnyBringr Shop",
      imageUrl:
        "https://i.ibb.co/KhfRsLq/Powerful-technology-to-build-and-innovate-2.png",
      category: "client",
      tags: ["HTML", "TailwindCSS", "Jquery", "Laravel", "MySQL"],
      previewLink: "https://anybringr.com/",
      githubLink: "https://anybringr.com/",
    },
    {
      title: "FacdCab - Stall Booking System",
      imageUrl:
        "https://i.ibb.co/VHj2qsb/I-will-Install-any-codecanyon-project-on-cpanel-4.png",
      category: "client",
      tags: ["HTML", "Bootstrap", "Jquery", "Laravel", "MySQL"],
      previewLink: "https://facdcabsyl.com/",
      githubLink: "https://facdcabsyl.com/",
    },
    {
      title: "LTEAdmin - admin panel template",
      imageUrl: "https://i.ibb.co/99Gs6Wr/Untitled-design-4.png",
      category: "ui",
      tags: ["HTML", "TailwindCSS", "Javascript"],
      previewLink: "https://himelha.github.io/adminLte/src/",
      githubLink: "https://github.com/HIMELha/adminLte",
    },
    {
      title: "BookStore - landing page for bookshop",
      imageUrl: "https://i.ibb.co/YcbSsxz/Untitled-design-5.png",
      category: "ui",
      tags: ["HTML", "Vanila CSS", "Javascript", "Sliders"],
      previewLink: "https://himelha.github.io/BookStore/",
      githubLink: "https://github.com/HIMELha/BookStore",
    },
    {
      title: "Vehicle website landing page",
      imageUrl: "https://i.ibb.co/wBT4sGc/Untitled-design-2.png",
      category: "ui",
      tags: ["HTML", "Vanila CSS", "Javascript"],
      previewLink: "https://himelha.github.io/vehicles-Landing-Page/",
      githubLink: "https://github.com/HIMELha/vehicles-Landing-Page",
    },
    {
      title: "Simple Portfolio",
      imageUrl: "https://i.ibb.co/g97vrs3/Untitled-design-7.png",
      category: "ui",
      tags: ["HTML", "Vanila CSS", "Javascript"],
      previewLink: "https://himelha.github.io/portfolio/",
      githubLink: "https://github.com/HIMELha/portfolio",
    },
  ];

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="px-[5%] maxWidth py-4 hero !h-full ">
      <div className="grid col-span-2 mb-6 py-2">
        <h1 className="text-3xl leading-12 text-center">
          <span className="text-[32px] headingText ">My Projects</span>
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
            filter === "fullstack"
              ? "bg-slate-800 !text-white dark:bg-white dark:border-white dark:!text-slate-900"
              : ""
          }`}
          onClick={() => handleFilterChange("fullstack")}
        >
          FullStack
        </button>
        <button
          className={`btn-outline transition ${
            filter === "client"
              ? "bg-slate-800 !text-white dark:bg-white dark:border-white dark:!text-slate-900"
              : ""
          }`}
          onClick={() => handleFilterChange("client")}
        >
          Client
        </button>
        <button
          className={`btn-outline transition ${
            filter === "ui"
              ? "bg-slate-800 !text-white dark:bg-white dark:border-white dark:!text-slate-900"
              : ""
          }`}
          onClick={() => handleFilterChange("ui")}
        >
          UI Design
        </button>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-5 md:gap-7 lg:gap-7">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project">
            <img
              src={project.imageUrl}
              alt=""
              className="w-full rounded-tr-md lg:max-h-[290px]  md:max-w-[310px] lg:max-w-[330px]"
            />
            <div className="flex flex-col px-3 py-2 mb-2">
              <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100">
                {project.title}
              </h2>
              <div className="flex gap-2 justify-start items-center flex-wrap mt-2 mb-12">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tags bg-slate-700 text-white">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 lg:gap-1 justify-center items-center flex-wrap absolute bottom-2 left-0 right-0 lg:relative xl:right-10">
                <button
                  className="btn !rounded-full"
                  onClick={() => window.open(project.previewLink)}
                >
                  <i className="fa-solid fa-up-right-from-square icon"></i>
                  Preview
                </button>
                <button
                  className="btn !rounded-full"
                  onClick={() => window.open(project.githubLink)}
                >
                  <i className="fa-brands fa-github icon"></i>Github
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredProjects.length == 0 && (
          <div className="mx-auto mt-5 col-span-full">
            <h3 className="text-xl">No Projects Available</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
