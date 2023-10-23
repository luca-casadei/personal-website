import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Root() {
  return (
    <main className="flex flex-col overflow-x-hidden h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}
