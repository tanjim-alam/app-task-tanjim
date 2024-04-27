import React, { useState } from 'react';
import "../accordion/accordion.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


function Accordion({ title, contents = [], handleFilterChangeByCategory }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <div className="accordion-titleBox">
                    <div className='' style={{ display: "flex", flexDirection: "column" }}>
                        <span>{title}</span>
                        <span style={{ fontSize: "18px", fontWeight: "normal" }}>All</span>
                    </div>
                    <button>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                </div>
                <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                </div>
            </div>
            {isOpen && <div className="accordion-content">
                <p>Unselected all</p>
                <div className='contents'>
                    {contents?.map((content) => (
                        <div onClick={() => handleFilterChangeByCategory(content)}>
                            <input type="checkbox" />
                            <span> {content}</span>
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    );
}

export default Accordion