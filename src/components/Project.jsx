
const Project = ({ imageUrl, title, tags, previewLink, githubLink }) => {
  return (
    <div className="project dark:bg-transparent">
      <img
        src={imageUrl}
        alt=""
        className="w-full rounded-tr-md lg:max-h-[240px]"
      />
      <div className="flex flex-col px-3 py-2">
        <h2 className="text-xl font-medium text-slate-800">{title}</h2>
        <div className="flex gap-2 justify-start items-center flex-wrap mt-2 mb-12">
          {tags.map((tag, index) => (
            <span key={index} className={`tags bg-${tag.color} text-white`}>
              <i className={tag.icon}></i>
              {tag.name}
            </span>
          ))}
        </div>
        <div className="flex gap-4 justify-center items-center flex-wrap absolute bottom-2 left-0 right-0 pt-2.5">
          <button
            className="btn !rounded-full"
            onClick={() => window.open(previewLink)}
          >
            <i className="fa-solid fa-up-right-from-square icon"></i>Preview
          </button>
          <button
            className="btn !rounded-full"
            onClick={() => window.open(githubLink)}
          >
            <i className="fa-brands fa-github icon"></i>Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
