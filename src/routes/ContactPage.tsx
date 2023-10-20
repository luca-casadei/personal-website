export default function Contatti(){
    return(
        <p id="contactPage">
            <form className="flex flex-col items-center mt-10" id="contactForm">
                <div className="flex flex-row">
                    <label htmlFor="emailField">Email:</label>
                    <input id="emailField" className="ml-3" type="email" placeholder="esempio@esempio.it"/>
                </div>
                <div>
                    <label htmlFor="subjectField">Oggetto:</label>
                    <input id="subjectField" type="text"/>
                </div>
            </form>
        </p>
    )
}