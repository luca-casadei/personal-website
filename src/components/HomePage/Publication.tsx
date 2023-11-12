import { PublicationDetails } from "../../utilities/Publications";

export default function Publication(publicationDetails: PublicationDetails) {
    const imagesPath: string = "../resources/publications/";
    return (
        <section className="flex flex-col w-full gap-2 text-black bg-white shadow-xl rounded-lg p-5 md:pr-10">
            <div className="flex md:flex-row flex-col text-lg md:gap-10 uppercase md:text-justify text-center">
                <h1>{publicationDetails.title}</h1>
                <h1 className="md:ml-auto">{publicationDetails.category}</h1>
            </div>
            <div className="flex md:flex-row flex-col lg:gap-5 md:gap-10 gap-5 justify-center">
                <div className="md:w-1/6 w-full flex flex-col justify-center items-center">
                    <img src={imagesPath + publicationDetails.imgSrc} width={150} height={150} alt="documentImage" />
                </div>
                <div className="flex flex-col justify-center md:w-5/6 w-full md:text-justify text-center">
                    {publicationDetails.description}
                </div>
            </div>
            <a className="text-center text-orange-400" href={publicationDetails.link}>
                <span className="underline">Vai alla pubblicazione completa</span>
                <span>📄</span>
            </a>
        </section>
    )
}