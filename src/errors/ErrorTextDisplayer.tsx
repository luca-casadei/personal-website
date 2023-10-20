type ErrorDisplayer = {
    statusCode: number,
    statusText: string
}

export default function ErrorTextDisplayer({statusCode, statusText}: ErrorDisplayer){
    let detailedDescription: string = "";
    
    switch(statusCode){
        case 404:{
            detailedDescription = "La pagina non è stata trovata, controllare eventuali errori nell'indirizzo inserito";
            break;
        }
    }
    
    return(
        <p id="error-displayer" className="flex flex-col items-center">
            <div>Spiacente, la richiesta non può essere soddisfatta</div>
            <div>Descrizione errore: {statusText}</div>
            <div>{detailedDescription}</div>
            <div>Codice errore: {statusCode}</div>
        </p>
    )
}