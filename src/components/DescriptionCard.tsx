type CardElements = {
  title: string;
  imageSource: string;
  description: string;
  imgToLeft: boolean;
};

export default function DescriptionCard({
  title,
  imageSource,
  description,
  imgToLeft,
}: CardElements) {
  const imagePath: string = "./cardicons/";
  return (
    <div
      className={
        imgToLeft
          ? "flex items-center gap-5 md:flex-row flex-col"
          : "flex items-center gap-5 md:flex-row-reverse flex-col"
      }
    >
      <img
        src={imagePath + imageSource}
        className="max-h-xxs max-w-xxs"
        alt="photograph"
      />
      <div className="flex flex-col md:text-justify text-center gap-5">
        <h1 className="text-3xl">{title}</h1>
        <div>{description}</div>
      </div>
    </div>
  );
}
