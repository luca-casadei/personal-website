import { Link } from "react-router-dom";

type ErrorDisplayer = {
  statusCode: number;
  statusText: string;
};

export default function ErrorTextDisplayer({
  statusCode,
  statusText,
}: ErrorDisplayer) {
  let detailedDescription: string = "";

  switch (statusCode) {
    case 404: {
      detailedDescription =
        "La pagina non è stata trovata, controllare eventuali errori nell'indirizzo inserito";
      break;
    }
  }

  return (
    <section
      id="error-displayer"
      className="flex flex-col h-full justify-center items-center bg-oxford-blue text-white"
    >
      <div>Spiacente, la richiesta non può essere soddisfatta</div>
      <h1 className="m-10 text-amber-400 text-5xl">{statusCode}</h1>
      <div>Descrizione errore: "<span className="text-amber-400">{statusText}</span>" </div>
      <div>{detailedDescription}</div>
      <Link className="mt-20 bg-amber-400 p-3 hover:bg-amber-500 rounded-lg" to={"/home"}>Torna alla home</Link>
    </section>
  );
}
