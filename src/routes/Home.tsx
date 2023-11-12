import DescriptionCard from "../components/DescriptionCard";
import PublicationContainer from "../components/HomePage/PublicationContainer";

export default function Home() {
  return (
    <section id="homePage" className="flex flex-col bg-oxford-blue text-white gap-16 md:p-20 p-5">
      <DescriptionCard
        title="Chi sono"
        imageSource="lclogo.png"
        description={"Benvenuto/a sul mio sito personale, sono Luca Casadei, uno studente del corso di laurea in 'Ingegneria e Scienze Informatiche' del campus di Cesena dell'università di Bologna.\nHo creato questo sito per condividere pubblicamente alcuni dei miei progetti o applicativi, la maggior parte è open source ed il codice è consultabile liberamente, altri invece sono elencati unicamente a scopo informativo e quindi non condivisibili per motivi di riservatezza.\nVerranno caricati anche collegamenti a documenti da me redatti in cui tratto concetti relativi alla programmazione o materie universitarie."}
        imgToLeft={true}
      />
      <DescriptionCard
        title="Pubblicazioni e documenti"
        imageSource="doc.svg"
        description="Questa sezione è pensata per il caricamento di documenti e materiale da me redatto e consultabile pubblicamente, tutto il materiale qui presente non può e non deve essere usato a scopo commerciale, o modificato senza citare la fonte originale del documento, se viene specificata una licenza per una pubblicazione in particolare, bisognerà attenersi alle condizioni della stessa, qualora invece essa non venga specificata, il materiale non può essere modificato o condiviso senza il mio permesso."
        imgToLeft={false}
      />
      <PublicationContainer />
    </section>
  );
}
