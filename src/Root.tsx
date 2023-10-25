//React imports
import { Outlet } from "react-router-dom";
import { useState } from "react";
import {useEffect} from "react"

//Navbar and footer
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Loading
import LoadingContext from "./utilities/LoadingContext";
import LoadingPage from "./errors/LoadingPage";
import { sleep } from "./utilities/Sleepers";

export default function Root() {
  const [isLoading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  //To test the loading page uncomment the code below.
  /*useEffect(()=>{
    setLoadingText("Debug della pagina di loading...");
    setLoading(true);
    sleep(3000).then(()=>{
      setLoading(false);
    })
  },[])*/
  

  return (
    <LoadingContext.Provider
      value={{isLoading:isLoading, loadingText:loadingText, setLoadingText:setLoadingText, setLoading:setLoading,}}
    >
      <main className="flex flex-col overflow-x-hidden h-screen">
        {isLoading ? (
          <LoadingPage/>
        ) : (
          <>
            <NavBar />
            <Outlet />
            <Footer />
          </>
        )}
      </main>
    </LoadingContext.Provider>
  );
}
