import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav
      id="navbar"
      className="text-white sticky top-0
      py-3 w-full bg-gradient-to-r 
      from-amber-300 to-amber-600"
    >
      <div className="flex flex-row ml-3 justify-start">
        <NavLink to={"/home"} className="p-2 rounded-lg">
          Home
        </NavLink>
        <NavLink to={"/contatti"} className={"p-2 rounded-lg sm:ml-3"}>
          Contattami
        </NavLink>
        <NavLink to={"/progetti"} className={"p-2 rounded-lg sm:ml-3"}>
          Progetti
        </NavLink>
      </div>
    </nav>
  );
}
