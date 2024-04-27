
import React, { useState } from "react";
import USD from "../../assets/usFLAG.png";
import insta from "../../assets/Insta.png";
import linkedin from "../../assets/linkedin.png";
import gpay from "../../assets/g-pay.png";
import mastercard from "../../assets/masercard.png";
import amex from "../../assets/amex.png";
import paypal from "../../assets/paypal.png";
import apay from "../../assets/a-pay.png";
import dpay from "../../assets/d-pay.png";
import dropdown from "../../assets/arrow-right.png"
// import dropdown from "../Assets/arrow-right.png";
import "../footer/footer.css"
import FooterAccordion from "../footerAccordion/FooterAccordion";

const Footer = () => {
    const [footerbtmcls, setFooterbtmcls] = useState("footer-bottom");

    return (
        <footer id="footerContainer">
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <div className="footerBox">BE THE FIRST TO KNOW</div>
                        <p>Sign up for updates from mettā muse.</p>
                        <div className="footerSubscribeBox">
                            <input type="email" placeholder="Enter your E-mail..." />
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className="footer-top-right">
                        <div>
                            <div className="footerBox">CONTACT US</div>
                            <div className="footerContactInfo">
                                <span className="contactNo">+44221135360</span>
                                <span className="mail">customercare@mettamuse.com</span>
                            </div>
                        </div>
                        <div className="currencySection">
                            <div className="footerBox">CURRENCY</div>
                            <img src={USD} alt="usd" />
                        </div>

                        <div className="currencySection1">
                            <div className="footerBox">CURRENCY</div>
                            <img src={USD} alt="usd" />
                        </div>

                        <p>
                            Transactions will be completed in Euros and a currency reference is
                            available on hover.
                        </p>
                    </div>
                </div>
                <div className={footerbtmcls}>
                    <div className="footer-bottom-left">
                        <div className="smallDeviceFooter-links">
                            <FooterAccordion title={["mettā muse"]} contents={["About", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"]} />
                        </div>
                        <div className="smallDeviceFooter-links">
                            <FooterAccordion title={["QUICK LINKS"]} contents={["Order & Shipping", "Join/Login as Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"]} />
                        </div>
                        <div className="footer-links">
                            <div style={{ display: "flex", gap: "10px" }}>
                                <span style={{ fontSize: "24px", marginBottom: "10px" }}>mettā muse</span>
                                <span>About</span>
                                <span>Stories</span>
                                <span>Artisans</span>
                                <span>Boutiques</span>
                                <span>Contact Us</span>
                                <span>EU Compliances Docs</span>
                            </div>
                            <div className="" style={{ display: "flex", gap: "10px" }}>
                                <span style={{ fontSize: "24px", marginBottom: "10px" }}>QUICK LINKS</span>
                                <span>Order & Shipping</span>
                                <span>Join/Login as Seller</span>
                                <span>Payment & Pricing</span>
                                <span>Return & Refunds</span>
                                <span>FAQs</span>
                                <span>Privacy Policy</span>
                                <span>Terms & Conditions</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-right">
                        <div className="mediaBox">
                            <div className="footerFollows">
                                FOLLOW US <img src={dropdown} alt="" />
                            </div>
                            <div className="mediaIcons">
                                <img src={insta} alt="instagram" />
                                <img src={linkedin} alt="linkedin" />
                            </div>
                        </div>
                        <div className="payment-portals">mettā muse ACCEPTS</div>
                        <div className="payment-portals-icons">
                            <img src={gpay} alt="gpay" />
                            <img src={mastercard} alt="mastercard" />
                            <img src={paypal} alt="paypal" />
                            <img src={amex} alt="amex" />
                            <img src={apay} alt="apay" />
                            <img src={dpay} alt="dpay" />
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    Copyright © 2023 mettamuse. All rights reserved.
                </div>
            </div>
        </footer >
    );
};

export default Footer;
