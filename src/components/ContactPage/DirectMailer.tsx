export default function DirectMailer() {
  return (
    <div
      id="directMailer"
      className="flex md:flex-row flex-col rounded-md"
    >
      <p>Oppure contattami con il tuo mailer cliccando su questo indirizzo: </p>
      <a
        className="md:ml-5 md:mt-0 rounded-md text-orange-400"
        href="mailto:admin@lucacasadei.net"
      >
        admin@lucacasadei.net
      </a>
    </div>
  );
}
