import "./NavBar.css";
import { useState } from "react";
import NavBarContents from "./NavBarContents";

export default function NavBar() {
  const [isMenuVisible, toggleMenuVisible] = useState(false);
  const imagePath: string = "../../resources/navigation/"

  return (
    <nav
      id="navbar"
      className="text-white sticky top-0
      py-3 w-full bg-gradient-to-l
      from-red-500 to-amber-500 flex flex-col"
    >
      <div className="flex flex-row mx-5">
        <div className="md:flex gap-5 md:flex-row md:visible hidden">
          <NavBarContents/>
        </div>
        <button type="button" className="ml-auto md:hidden visible" onClick={()=>{toggleMenuVisible(!isMenuVisible)}}>
          <img className="max-h-6 max-w-6" src={imagePath + "hamburger.svg"} alt="menu" />
        </button>
      </div>
      {
        isMenuVisible ? <div className="flex flex-col gap-3 mx-5 md:hidden visible py-2">
          <NavBarContents/>
        </div> : <></>
      }
    </nav>
  );
}
