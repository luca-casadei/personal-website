import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import ErrorTextDisplayer from "./ErrorTextDisplayer";


export default function GenericErrorPage(){
    
    const error = useRouteError();
    console.log(error);

    if(isRouteErrorResponse(error)){
        return(
            <ErrorTextDisplayer statusCode={error.status} statusText={error.statusText}/>
        )
    }
    else{
        return(
            <ErrorTextDisplayer statusCode={520} statusText={"Errore generico o sconosciuto"}/>
        )
    }
}