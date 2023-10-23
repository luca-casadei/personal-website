export default function DirectMailer() {
  return (
    <div
      id="directMailer"
      className="flex md:flex-row flex-col rounded-md"
    >
      <div>Oppure contattami con il tuo mailer cliccando su questo indirizzo: </div>
      <a
        className="md:ml-5 md:mt-0 rounded-md text-orange-400"
        href="mailto:luca@lucacasadei.net"
      >
        luca@lucacasadei.net
      </a>
    </div>
  );
}
