import React from 'react';
import "../bannerBox/banner.css"

function Banner() {
    return (
        <div>
            <div className="navLinkStructure">
                <span>HOME</span>
                <span>|</span>
                <span>SHOP</span>
            </div>
            <div className="bannerContentBox">
                <div className="bannerContent">
                    <div className="bannerHeading">DISCOVER OUR PRODUCTS</div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
                        dolor.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner