export default function Publications() {
  return (
    <section id="publications" className="my-20">
      <div className="flex md:flex-row flex-col-reverse mx-5 md:mx-20">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-center md:mt-0 mt-3">
            Pubblicazioni e documenti
          </h1>
          <p className="mt-3 md:mr-10 md:text-justify text-center">
            Questa sezione è pensata per il caricamento di documenti e materiale da me redatto e
            consultabile pubblicamente, a patto che non venga utilizzato a scopo commerciale o senza
            gli adeguati crediti.
          </p>
        </div>
        <img src="./doc.svg" alt="docImg" className="max-h-24 max-w-24" />
      </div>
    </section>
  );
}
