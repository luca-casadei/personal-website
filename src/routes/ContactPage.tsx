export default function Contatti(){
    return(
        <p id="contactPage" className="items-center flex flex-col">
            <form className="flex flex-col items-center mt-10 bg-amber-100 w-1/2 p-8 rounded-lg" id="contactForm">
                <h1 className="m-5">Inviami una mail</h1>
                <div className="flex flex-row">
                    <label htmlFor="emailField">Email:</label>
                    <input required id="emailField" className="ml-3" type="email" placeholder="esempio@esempio.it"/>
                </div>
                <div className="flex flex-row">
                    <label htmlFor="subjectField">Oggetto:</label>
                    <input className="ml-3" required id="subjectField" type="text" placeholder="Inserisci oggetto"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="contentField">Contenuto</label>
                    <input required type="text" id="contentField" placeholder="Inserisci qui il testo da inviare"></input>
                </div>
            </form>
        </p>
    )
}