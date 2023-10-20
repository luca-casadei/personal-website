import { NavLink } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav id="navbar" className="bg-amber-300 text-white p-3 absolute w-full">
            <div className="flex sm:flex-row flex-col ml-3">
                <NavLink to={"/home"} className="p-2 rounded-lg">Home</NavLink>
                <NavLink to={"/contatti"} className={"p-2 rounded-lg sm:ml-3"}>Contatti</NavLink>
                <NavLink to={"/progetti"} className={"p-2 rounded-lg sm:ml-3"}>Progetti</NavLink>
            </div>
        </nav>
    )
}