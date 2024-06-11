import { NavLink } from "react-router-dom";

export default function NavBarContents() {
    return (
        <>
            <NavLink to={"/home"}>
                HOME
            </NavLink>
            <NavLink to={"/progetti"}>
                PROGETTI
            </NavLink>
            <NavLink to={"/altro"}>
                ALTRI CONTENUTI
            </NavLink>
        </>
    )
}