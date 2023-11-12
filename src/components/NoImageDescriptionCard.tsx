import "./Cards.css"

export type NoImageCardElements = {
  title: string;
  description: string;
};

export default function NoImageDescriptionCard({
  title,
  description,
}: NoImageCardElements) {
  return (
    <div className="description-div flex flex-col md:text-justify text-center gap-2">
        <h1 className="text-3xl">{title}</h1>
        <div>{description}</div>
    </div>
  );
}
