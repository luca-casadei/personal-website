import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function Root(){
    return(
        <main className="h-full">
            <NavBar/>
            <Outlet/>
        </main>
    )
}