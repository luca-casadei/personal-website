export default function MailForm() {
  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={handleEmailSubmit}
      className="flex flex-col items-center rounded-lg p-10 bg-amber-200"
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
          maxLength={500}
          className="p-3 rounded-lg focus:outline-orange-400 max-h-24 h-24"
          placeholder="Inserisci qui il contenuto"
        />
      </div>
      <input
        type="submit"
        className="bg-orange-400 text-white hover:bg-orange-500 p-2 mt-6 rounded-lg"
        value={"Invia"}
      />
    </form>
  );
}
