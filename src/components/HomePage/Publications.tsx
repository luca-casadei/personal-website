export default function Publications() {
  return (
    <section id="publications" className="mt-20 text-white">
      <div className="flex md:flex-row flex-col-reverse mx-5 md:mx-20">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-center md:mt-0 mt-3">
            Pubblicazioni e documenti
          </h1>
          <p className="mt-3 md:mr-10 md:text-justify text-center">
            In questa sezione verranno caricati documenti da me realizzati
            durante la mia esperienza scolastica o progettuale che ritengo possa
            essere utile condividere pubblicamente, tutto il contenuto caricato
            qui non potrà essere utilizzato per nessun motivo a scopo
            commerciale e senza
          </p>
        </div>
        <img src="./doc.svg" alt="docImg" className="max-h-24 max-w-24" />
      </div>
    </section>
  );
}
