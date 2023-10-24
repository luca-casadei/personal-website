import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav
      id="navbar"
      className="text-white sticky top-0
      py-3 w-full bg-gradient-to-l
      from-amber-300 to-amber-600"
    >
      <div className="flex flex-row ml-3 justify-start gap-3">
        <NavLink to={"/home"}>
          HOME
        </NavLink>
        <NavLink to={"/contatti"} className={"sm:ml-3"}>
          CONTATTAMI
        </NavLink>
        <NavLink to={"/progetti"} className={"sm:ml-3"}>
          PROGETTI
        </NavLink>
      </div>
    </nav>
  );
}
