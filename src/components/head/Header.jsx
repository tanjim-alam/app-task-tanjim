import React, { useState } from 'react';
import "../head/header.css"
import { NavLink } from 'react-router-dom';
import { IoLogoCodepen } from "react-icons/io";

const Header = () => {

    return (
        <header className="head">
            <div className="headlink left-m">
                <IoLogoCodepen />
                <span>Lorem ipsum dolor</span>
            </div>
            <div className="headlink">
                <IoLogoCodepen />
                <span>Lorem Ipsum Dolor </span>
            </div>
            <div className="headlink right-m">
                <IoLogoCodepen />
                <span>Lorem Ipsum Dolor</span>
            </div>
        </header>
    );
};

export default Header;
