import { useState } from "react";
import DirectMailer from "./DirectMailer";
import { sendEmail, MailOptions } from "../../utilities/Mailer";

export default function MailForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [text, setText] = useState("");
  const [subject, setSub] = useState("");
  const [company, setCompany] = useState("");

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    await event.preventDefault();
    const mailOptions: MailOptions = {
      name: name,
      surname: surname,
      text: text,
      subject: subject,
      company: company
    };
    await sendEmail(mailOptions);
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
        <label className="md:w-1/5" htmlFor="nameField">
          <span className="text-red-600">*</span>Nome:
        </label>
        <input
          className="md:w-4/5 outline-0 border-b focus:border-orange-400"
          required
          onChange={(event) => {
            const target: HTMLInputElement = event.target;
            setName(target.value);
          }}
          type="text"
          id="nameField"
          placeholder="Inserisci il tuo nome qui"
        />
      </div>
      <div className="flex md:flex-row flex-col">
        <label className="md:w-1/5" htmlFor="surnameField">
          <span className="text-red-600">*</span>Cognome:
        </label>
        <input
          className="md:w-4/5 outline-0 border-b focus:border-orange-400"
          required
          onChange={(event) => {
            const target: HTMLInputElement = event.target;
            setSurname(target.value);
          }}
          type="mail"
          id="mailField"
          placeholder="Inserisci qui il tuo cognome"
        />
      </div>
      <div className="flex md:flex-row flex-col">
        <label className="md:w-1/5" htmlFor="surnameField">
          Azienda:
        </label>
        <input
          className="md:w-4/5 outline-0 border-b focus:border-orange-400"
          onChange={(event) => {
            const target: HTMLInputElement = event.target;
            setCompany(target.value);
          }}
          type="mail"
          id="mailField"
          placeholder="Inserisci qui il tuo cognome"
        />
      </div>
      <div className="flex md:flex-row flex-col">
        <label className="md:w-1/5" htmlFor="subjectField">
          <span className="text-red-600">*</span>Oggetto:
        </label>
        <input
          className="md:w-4/5 outline-0 border-b focus:border-orange-400"
          required
          onChange={(event) => {
            const target: HTMLInputElement = event.target;
            setSub(target.value);
          }}
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
          required
          onChange={(event) => {
            const target: HTMLTextAreaElement = event.target;
            setText(target.value);
          }}
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
