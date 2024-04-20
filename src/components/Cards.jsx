
const Cards = ({ imageUrl, title }) => {
  return (
    <div className="card !px-4 !py-5  transition hover:scale-105 ">
      <img src={imageUrl} alt="" className="cardImage" />
      <div className="flex flex-col items-start gap-1">
        <h2 className="text-left text-[24px] font-medium text-slate-800 dark:text-slate-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Cards;
