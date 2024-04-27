import React, { useState } from 'react';
import "../footerAccordion/footerAccordion.css"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { NavLink } from 'react-router-dom';


function FooterAccordion({ title, contents }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <div className="accordion-title">
                    <h3>{title}</h3>
                    <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </div>
                <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                </div>
            </div>
            {isOpen && <div className="footer-accordion-content">
                <div className='contents'>
                    {contents?.map((content) => (
                        <NavLink className="contentLink">
                            {content}
                        </NavLink>
                    ))}
                </div>
            </div>}
        </div>
    );
}

export default FooterAccordion