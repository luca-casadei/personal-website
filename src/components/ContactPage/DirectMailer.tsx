export default function DirectMailer() {
  return (
    <div
      id="directMailer"
      className="flex md:flex-row flex-col p-2 bg-amber-200 rounded-md"
    >
      <div>Oppure inviami una mail con il tuo mailer cliccando su questo indirizzo</div>
      <a
        className="md:ml-10 md:mt-0 mt-5 p-2 bg-orange-400 rounded-md text-white hover:bg-orange-300"
        href="mailto:luca@lucacasadei.net"
      >
        luca@lucacasadei.net
      </a>
    </div>
  );
}
