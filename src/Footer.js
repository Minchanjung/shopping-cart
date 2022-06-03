import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="listContainer">
                <div className="socialsContainer">

                </div>
                <div className="keychronContainer">
                    <h2>KEYCHRON</h2>
                    <div>About Us</div>
                    <div>Where To Buy</div>
                    <div>Blog</div>
                </div>
                <div className="helpContainer">
                    <h2>HELP & SUPPORT</h2>
                    <div>User Manual</div>
                    <div>HelpCenter</div>
                </div>
                <div className="newsLetterContainer">
                    <h2>BE THE FIRST TO KNOW</h2>
                    <p>Get the latest product news, special offers and<br/> interesting behind-the-scenes stories from us</p>
                    <input placeholder="Enter Your Email"></input>
                </div>
            </div>

            <div className="copyrightContainer">
                <div className="copyright">© 2022 Keychron | Wireless Mechanical Keyboards for Mac, Windows and Android</div>
            </div>
        </div>
    )
}

export default Footer