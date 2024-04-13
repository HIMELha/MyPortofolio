
const Cards = ({ imageUrl, title, description }) => {
  return (
    <div className="card !px-4 !py-5">
      <img src={imageUrl} alt="" className="cardImage" />
      <div className="flex flex-col items-start gap-1">
        <h2 className="text-left text-[28px] font-medium text-slate-800 dark:text-slate-200">
          {title}
        </h2>
        <span className="text-[15px] font-medium sm:text-[13px] ">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Cards;
