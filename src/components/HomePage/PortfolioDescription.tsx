export default function PortfolioDescription() {
  return (
    <div className="flex flex-col mx-5 md:mx-20 items-center md:flex-row mt-10">
      <img
        src="./lclogo.png"
        className="max-h-xxs max-w-xxs"
        alt="photograph"
      />
      <div className="flex flex-col md:ml-10 md:text-justify text-center">
        <h1 className="text-3xl mt-3">Luca Casadei</h1>
        <div className="mt-3">
          Benvenuto sul mio sito personale, sono Luca Casadei, uno studente di
          ingegneria e scienze informatiche del campus di Cesena dell'università
          di Bologna, ho creato questo sito per condividere pubblicamente alcuni
          dei miei progetti o applicativi, la maggior parte è open source ed il
          codice è consultabile liberamente, altri invece sono elencati
          unicamente a scopo informativo e quindi non condivisibili per motivi
          di riservatezza.
        </div>
      </div>
    </div>
  );
}
