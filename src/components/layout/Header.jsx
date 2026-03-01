import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="nav-bar">
        <div className="nav-log">
           <h2 className="logo"><i class="fa-solid fa-clapperboard"></i> Movie<span>Hub</span></h2>
        </div>

        <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}><i className="fa-solid fa-bars"></i></div>
        <div className={`nav-links ${menuOpen ? "active": ""}`}>
          <NavLink to="/" className="nav-items"> <i class="fa-solid fa-house"></i> HOME</NavLink>
          <NavLink to="about" className="nav-items"> <i class="fa-solid fa-circle-info"></i> ABOUT</NavLink>
          <NavLink to="movies" className="nav-items"> <i class="fa-solid fa-clapperboard"></i> MOVIES</NavLink>
          <NavLink to="contact" className="nav-items"><i class="fa-solid fa-circle-user"></i> CONTACT</NavLink>
          <NavLink to="#" className="nav-items"><i class="fa-solid fa-right-to-bracket"></i> LOGIN</NavLink>
        </div>
      </div>
    </>
  );
};
