export default function Contatti() {
  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <section id="contactPage" className="flex flex-col items-center">
      <form
        onSubmit={handleEmailSubmit}
        className="flex flex-col w-full items-center md:mt-20 rounded-lg p-10 bg-amber-200 lg:w-4/5"
        id="contactForm"
      >
        <h1 className="mb-7 text-orange-500 font-bold md:text-lg sm:text-sm">
          Inviami una mail attraverso il seguente modulo
        </h1>
        <div className="flex flex-col md:flex-row w-full">
          <label htmlFor="emailField" className="w-1/5">
            Email:
          </label>
          <input
            required
            id="emailField"
            className="grow rounded-md p-2 focus:outline-orange-400"
            type="email"
            placeholder="esempio@esempio.it"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full mt-6">
          <label className="w-1/5" htmlFor="subjectField">
            Oggetto:
          </label>
          <input
            className="grow rounded-md p-2 focus:outline-orange-400"
            required
            id="subjectField"
            type="text"
            placeholder="Inserisci oggetto"
          />
        </div>
        <div className="flex flex-col w-full mt-6 h-1/2">
          <label htmlFor="contentField">Contenuto</label>
          <textarea
            id="contentField"
            required
            className="p-3 h-48 rounded-lg focus:outline-orange-400"
            placeholder="Inserisci qui il contenuto"
          />
        </div>
        <input
          type="submit"
          className="bg-orange-400 text-white hover:bg-orange-500 p-2 mt-6 rounded-lg"
          value={"Invia"}
        />
        <div className="flex md:flex-row flex-col p-2 mt-6 justify-center bg-amber-200 w-full">
          <div>Oppure inviami una mail con il tuo mailer:</div>
          <a
            className="md:ml-10 p-2 bg-orange-400 rounded-md text-white hover:bg-orange-300"
            href="mailto:casadeiluca30@gmail.com"
          >
            casadeiluca30@gmail.com
          </a>
        </div>
      </form>
    </section>
  );
}
