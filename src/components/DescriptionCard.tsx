import "./Cards.css"
import { NoImageCardElements } from "./NoImageDescriptionCard";

interface CardElements extends NoImageCardElements {
  imageSource: string;
  imgToLeft: boolean;
}

export default function DescriptionCard({
  title,
  imageSource,
  description,
  imgToLeft,
}: CardElements) {
  const imagePath: string = "../resources/cardicons/";
  return (
    <div
      className={
        imgToLeft
          ? "flex items-center md:gap-10 gap-5 md:flex-row flex-col"
          : "flex items-center gap-5 md:flex-row-reverse flex-col"
      }
    >
      <img
        src={imagePath + imageSource}
        className="max-h-xxs max-w-xxs rounded-xl"
        alt="photograph"
      />
      <div className="description-div flex flex-col md:text-justify text-center gap-5">
        <h1 className="text-3xl">{title}</h1>
        <div>{description}</div>
      </div>
    </div>
  );
}
