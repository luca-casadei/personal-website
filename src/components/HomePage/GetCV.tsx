export default function GetCV() {
    return (
        <section className="flex md:flex-row flex-col md:gap-10 gap-5 md:items-start items-center">
            <img src={"/resources/cardicons/cvicon.png"} width={160} height={80} alt="CVIcon" />
            <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col md:gap-0 gap-3 text-center">
                    <h1 className="text-2xl">Curriculum</h1>
                    <div>Puoi scaricare l'ultima versione del curriculum cliccando sul bottone sottostante.</div>
                    <div>È un formato PDF con firma digitale, la data relativa all'ultima modifica è visualizzabile nel file in alto a destra.</div>
                </div>
                <a className="p-2 text-center hover:border-white border-oxford-blue border-solid border-2 self-center rounded-lg md:w-1/5 bg-gradient-to-bl hover:from-orange-400 hover:to-pink-500 from-amber-400 to-red-500" href="https://casadei.ddns.net:8443/getcv">Scarica</a>
            </div>
        </section>
    )
}