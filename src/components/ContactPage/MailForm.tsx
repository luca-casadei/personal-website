import DirectMailer from "./DirectMailer";

export default function MailForm() {
  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={handleEmailSubmit}
      className="flex flex-col rounded-lg p-10 shadow-2xl gap-10"
      id="contactForm"
    >
      <h1 className="text-lg text-orange-400">
        Compila il seguente modulo per contattarmi direttamente
      </h1>
      <div className="flex md:flex-row flex-col">
        <label className="w-1/5" htmlFor="mailField">
          <span className="text-red-600">*</span>Email:
        </label>
        <input
          className="w-4/5 outline-0 border-b focus:border-orange-400"
          required
          type="mail"
          id="mailField"
          placeholder="esempio@esempio.com"
        />
      </div>
      <div className="flex md:flex-row flex-col">
        <label className="w-1/5" htmlFor="subjectField">
          <span className="text-red-600">*</span>Oggetto:
        </label>
        <input
          className="w-4/5 outline-0 border-b focus:border-orange-400"
          required
          type="text"
          id="subjectField"
          placeholder="Inserisci l'oggetto"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="contentAreaField">
          <span className="text-red-600">*</span>Contenuto:
        </label>
        <textarea
          className="max-h-24 p-3 outline-0 border focus:border-orange-400"
          placeholder="Inserisci qui il contenuto della mail"
          id="contentAreaField"
        />
      </div>
      <input
        type="submit"
        className="text-white focus-within:bg-orange-300 bg-orange-400 w-1/5 place-self-center rounded-md py-1"
      />
      <DirectMailer />
    </form>
  );
}
