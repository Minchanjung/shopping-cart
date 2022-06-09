import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import carts from './shop/imgs/icons8-shopping-cart-50.png';

const Header = (props) => {

    const [cart, setCart] = useState(props.cartState);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
    }

    return (
        <div className="header">
            <h1 className="logo"><Link id='logo' to="/">Fakecron</Link></h1>
            <div id="linksContainer">
                <Link id="homeLink" to="/">Home</Link>
                <Link id="shopLink" to="/shop">Shop</Link>
                <span onClick={handleClick} id="cartLink">
                    <img id="cartIcon" src={carts} alt="shopping cart"></img>
                </span>
            </div>
            
            <div className="sidenavContainer" style={{width: isActive ? 300 : 0}}>
                <div className="sidenavContent">
                    <div id="closeBtn" onClick={handleClick}>X</div>
                    <h2 id="sidenavTitle">My Cart</h2>

                    <div id="sidenavItems">
                        {cart.length === 0 ? <div>Cart is empty</div> : null}
                        {cart.map(item => (
                            <SidenavItems />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const SidenavItems = () => {
    return (
        <div>

        </div>
    )
}

export default Header;

