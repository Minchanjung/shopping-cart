import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">Fakechron</h1>
            <Link id="homeLink" to="/">Home</Link>
           
        </div>
    )
}

export default Header;

//<Link id="shopLink" >Shop</Link>