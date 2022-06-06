import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import carts from './shop/imgs/icons8-shopping-cart-50.png';

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo"><Link id='logo' to="/">Fakecron</Link></h1>
            <div id="linksContainer">
                <Link id="homeLink" to="/">Home</Link>
                <Link id="shopLink" to="/shop">Shop</Link>
                <span id="cartLink">
                    <img id="cartIcon" src={carts} alt="shopping cart"></img>
                </span>
            </div>
            
           
        </div>
    )
}

export default Header;

