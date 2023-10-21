export default function Home() {
  return (
    <section id="homePage" className="flex flex-col mt-20 h-full items-center text-white">
      <div className="container flex flex-col items-center md:flex-row mt-10">
        <img src="./lclogo.png" className="max-h-xxs max-w-xxs" alt="photograph"/>
        <div className="flex flex-col md:ml-10 mt-5 md:text-justify text-center">
          <h1 className="text-3xl">Luca Casadei</h1>
          <div className="mt-5">
            Benvenuto sul mio sito personale, sono Luca Casadei, uno studente di
            ingegneria e scienze informatiche del campus di Cesena
            dell'università di Bologna, ho creato questo sito per condividere
            pubblicamente alcuni dei miei progetti o applicativi, la maggior
            parte è open source ed il codice è consultabile liberamente, altri
            invece sono elencati a scopo informativo ma non condivisibili per
            motivi di riservatezza.
          </div>
        </div>
      </div>
    </section>
  );
}
