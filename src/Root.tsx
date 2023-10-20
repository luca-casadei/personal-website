import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function Root(){
    return(
        <main>
            <NavBar/>
            <Outlet/>
        </main>
    )
}