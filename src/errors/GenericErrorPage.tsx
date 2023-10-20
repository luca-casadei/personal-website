import { useRouteError } from "react-router-dom"


export default function GenericErrorPage(){
    
    const error = useRouteError();
    console.log(error);

    return(
        <p>
            Si è verificato un errore non gestito.
        </p>
    )
}