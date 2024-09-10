import { useEffect, useState } from "react";
import { protocolConfig } from "../../utilities/Config";

export default function ApiSection() {
  const [apiState, setApiState] = useState(false);

  useEffect(() => {
    fetch(protocolConfig.secureApiUrl + "/ison")
      .then((response) =>
        response.json().then((json) => setApiState(json.online))
      )
      .catch(() => {
        setApiState(false);
      });
  }, [apiState]);

  return apiState ? (
    <section className="text-center self-center flex flex-col gap-3 md:w-1/2 border p-5 border-dashed">
      <p>Il server per lo scaricamento dei documenti è attualmente:</p>
      <p className="text-green-600 text-2xl">ONLINE</p>
      <p>Puoi usare tutte le funzionalità del sito.</p>
    </section>
  ) : (
    <section className="text-center self-center flex flex-col gap-3 md:w-1/2 border p-5 border-dashed">
      <p>Il server per lo scaricamento dei documenti è attualmente:</p>
      <p className="text-red-600 text-2xl">OFFLINE</p>
      <p>
        Non sarà possibile utilizzare le API remote di questo sito, ma sarà
        comunque possibile scaricare il curriculum dalla sezione sottostante.
      </p>
      <a className="text-amber-500" href="mailto:admin@lucacasadei.net">
        admin@lucacasadei.net
      </a>
    </section>
  );
}
