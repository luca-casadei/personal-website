import { ProjectProps } from "../../utilities/Projects";

export default function Project({
  title,
  description,
  link,
  image,
}: ProjectProps) {
  const imagesPath: string = "../resources/projects/";
  return (
    <div className="flex md:flex-row flex-col items-center gap-5 md:gap-10">
      <img
        className="object-cover"
        width={350}
        height={350}
        src={imagesPath + image}
        alt={title}
      />
      <div className="flex flex-col">
        <h2 className="md:text-2xl text-lg mb-3">{title}</h2>
        <p className="mb-2">{description}</p>
        {
          link.length > 0 ?
            <a className="text-blue-600 underline" href={link}>Vedi sorgente</a> :
            <div className="text-red-400">Sorgente privato</div>
        }
      </div>
    </div>
  );
}
