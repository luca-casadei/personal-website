export default function Contatti() {
  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <section
      id="contactPage"
      className="flex flex-col items-center justify-center h-full"
    >
      <form
        onSubmit={handleEmailSubmit}
        className="flex flex-col items-center bg-amber-100 rounded-lg w-2/3 h-2/3 p-10"
        id="contactForm"
      >
        <h1 className="mb-7 text-orange-500 font-bold text-lg">
          Inviami una mail attraverso il seguente modulo
        </h1>
        <div className="flex flex-row w-full">
          <label htmlFor="emailField" className="w-1/5">
            Email:
          </label>
          <input
            required
            id="emailField"
            className="ml-3 grow rounded-md p-2 focus:outline-orange-400"
            type="email"
            placeholder="esempio@esempio.it"
          />
        </div>
        <div className="flex flex-row w-full mt-6">
          <label className="w-1/5" htmlFor="subjectField">
            Oggetto:
          </label>
          <input
            className="ml-3 grow rounded-md p-2 focus:outline-orange-400"
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
            className="h-full p-3 rounded-lg focus:outline-orange-400"
            placeholder="Inserisci qui il contenuto"
          />
        </div>
        <input
          type="submit"
          className="bg-orange-300 p-2 mt-6 rounded-lg"
          value={"Invia"}
        />
      </form>
    </section>
  );
}
