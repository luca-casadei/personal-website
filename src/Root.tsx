//React imports
import { Outlet } from "react-router-dom";
import { useState } from "react";

//Navbar and footer
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Loading
import LoadingContext from "./utilities/LoadingContext";
import LoadingPage from "./errors/LoadingPage";

export default function Root() {
  const [isLoading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

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
