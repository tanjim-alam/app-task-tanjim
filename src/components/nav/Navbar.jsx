import React, { useState } from 'react';
import { IoLogoCodepen } from "react-icons/io";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { IoBagHandleOutline, IoMenu } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../../assets/Logo.png"
import "../nav/Navbar.css"
import { NavLink } from 'react-router-dom';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <section className="bottom-nav">
        <div className="bottom-nav-utility">
          <div className="logo">
            <button className="menu" alt="menu" onClick={toggleNavbar}><CiMenuBurger /></button>
            <img src={logo} alt="logo" />
          </div>
          {/* ============ */}
          <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul className="navbar1-links">
              <li><NavLink className="navlink" onClick={toggleNavbar}>SHOP</NavLink></li>
              <li><NavLink className="navlink" onClick={toggleNavbar}>SKILLS</NavLink></li>
              <li><NavLink className="navlink" onClick={toggleNavbar}>STORIES</NavLink></li>
              <li><NavLink className="navlink" onClick={toggleNavbar}>ABOUT</NavLink></li>
              <li><NavLink className="navlink" onClick={toggleNavbar}>CONTACT US</NavLink></li>
            </ul>
          </div>
          {/* ============== */}
          <div className="nav-utilities">
            <button className="navBtn search"><CiSearch /></button>
            <button className="navBtn like"><CiHeart /></button>
            <button className="navBtn bag"  ><IoBagHandleOutline /></button>
            <button className="navBtn profile" ><CiUser /></button>
            <select name="" id="" style={{ border: "none" }}>
              <option value="">ENG</option>
              <option value="">HI</option>
            </select>
          </div>
        </div>
        <span className="website-name">LOGO</span>

        <div className="nav-links">
          <ul>
            <li>
              <NavLink>SHOP</NavLink>
            </li>
            <li>
              <NavLink>SKILLS</NavLink>
            </li>
            <li>
              <NavLink>STORIES</NavLink>
            </li>
            <li>
              <NavLink>ABOUT</NavLink>
            </li>
            <li>
              <NavLink>CONTACT US</NavLink>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  )
}

export default Navbar