type PublicationDetails = {
    imgSrc: string;
    description: string;
    title: string;
    link: string;
}

export default function Publication({imgSrc, description, title, link} : PublicationDetails){
    const imagesPath: string = "./icons/";
    return(
        <section className="flex flex-col w-full gap-2 text-black bg-white shadow-xl rounded-lg p-5 md:pr-10">
            <h1 className="text-lg uppercase md:text-left text-center">{title}</h1>
            <div className="flex md:flex-row flex-col gap-2 justify-center">
                <div className="md:w-1/6 w-full flex flex-col justify-center items-center">
                    <img src={imagesPath + imgSrc} width={150} height={150} alt="documentImage"/>
                </div>
                <div className="flex flex-col justify-center md:w-5/6 w-full md:text-justify text-center">
                    {description}
                </div>
            </div>
            <a className="text-center text-orange-400" href={link}>
                <span className="underline">Vai alla pubblicazione completa</span>
                <span>📄</span>
            </a>
        </section>   
    )
}