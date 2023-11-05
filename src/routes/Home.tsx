import DescriptionCard from "../components/DescriptionCard";
import PublicationContainer from "../components/HomePage/PublicationContainer";

export default function Home() {
  return (
    <section id="homePage" className="flex flex-col bg-oxford-blue text-white gap-16 md:p-20 p-5">
      <DescriptionCard
        title="Chi sono"
        imageSource="lclogo.png"
        description="Benvenuto sul mio sito personale, sono Luca Casadei, uno studente di
    ingegneria e scienze informatiche del campus di Cesena dell'università
    di Bologna, ho creato questo sito per condividere pubblicamente alcuni
    dei miei progetti o applicativi, la maggior parte è open source ed il
    codice è consultabile liberamente, altri invece sono elencati
    unicamente a scopo informativo e quindi non condivisibili per motivi
    di riservatezza. Verranno caricati anche collegamenti a documenti da me
    redatti in cui tratto concetti relativi alla programmazione o materie universitario."
        imgToLeft={true}
      />
      <DescriptionCard
        title="Pubblicazioni e documenti"
        imageSource="doc.svg"
        description="Questa sezione è pensata per il caricamento di documenti e materiale da me redatto e
      consultabile pubblicamente, a patto che non venga utilizzato a scopo commerciale o senza
      gli adeguati crediti."
        imgToLeft={false}
      />
      <PublicationContainer />
    </section>
  );
}
