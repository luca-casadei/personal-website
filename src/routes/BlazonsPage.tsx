import DescriptionCard from "../components/DescriptionCard";

export default function BlazonsPage() {
    return (
        <section className="flex flex-col bg-oxford-blue text-white h-full p-10">
                <DescriptionCard
                    title="Araldica, scudi e bandiere"
                    imageSource="shield.svg"
                    imgToLeft={true}
                    description="Qui metterò bandiere e scudi realizzati con linguaggio pseudo-araldico utilizzando il sito DrawShield che linko successivamente."
                />
        </section>
    )
}