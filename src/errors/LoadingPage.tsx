import "./LoadingPage.css"
import {useContext} from "react"
import Context from "../utilities/LoadingContext"

export default function LoadingPage(){
    const context = useContext(Context)

    return(
        <section id="loadingPage" className="h-full bg-oxford-blue flex flex-col justify-center items-center">
            <p className="text-center text-white text-2xl">
                {context.loadingText}
            </p>
            <span className="loader mt-10"></span>
        </section>
    )
}