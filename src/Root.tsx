import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoadingContext from "./utilities/LoadingContext";
import { useState } from "react";

export default function Root() {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ isLoading: isLoading, setLoading: setLoading }}
    >
      <main className="flex flex-col overflow-x-hidden h-screen">
        {isLoading ? (
          <div>Caricamento...</div>
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
