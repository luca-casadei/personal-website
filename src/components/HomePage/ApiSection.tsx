import { useEffect, useState } from "react"
import { protocolConfig } from "../../utilities/Config"

export default function ApiSection() {
    const [apiState, setApiState] = useState(false)

    useEffect(() => {
        fetch(protocolConfig.secureApiUrl + "/ison")
            .then(response => response.json()
                .then(json => setApiState(json.online))).catch(() => {
                    setApiState(false)
                    console.log("L'errore ERR_CONNECTION_TIMED_OUT è ignorabile, significa che il server non è online.")
                })
    }, [apiState])

    return (
        apiState ?
            <section className="text-center flex flex-col gap-3">
                <p>Il server per lo scaricamento dei documenti è attualmente:</p>
                <p className="text-green-600 text-2xl">ONLINE</p>
                <p>Puoi usare tutte le funzionalità del sito.</p>
            </section> :
            <section className="text-center flex flex-col gap-3">
                <p>Il server per lo scaricamento dei documenti è attualmente:</p>
                <p className="text-red-600 text-2xl">OFFLINE</p>
                <p>Non sarà possibile inviare una mail tramite il modulo presente in "Contatti" o scaricare il CV, per contattarmi si può una mail direttamente al mio indirizzo personale come alternativa.</p>
            </section>
    )
}