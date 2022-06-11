import React, { useState, useContext } from "react";
import { Context } from "./Store";
import { Link } from "react-router-dom";
import "./Header.css"
import carts from './shop/imgs/icons8-shopping-cart-50.png';
import logo from './imgs/logo.webp';

const Header = (props) => {

    const [state, dispatch] = useContext(Context);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
    }

    return (
        <div className="header">
            <Link id='logo' to="/"><img src={logo} className="logo" alt="Keychron Logo"></img></Link>
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
                        {state.cart.length === 0 ? <div>Cart is empty</div> : null}
                        {state.cart.map(object => (
                            <SidenavItems name={object.name} price={object.price} quantity={object.quantity}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const SidenavItems = (props) => {

    const [state, dispatch] = useContext(Context);

    const handleDelete = (index) => {
        dispatch({type: 'REMOVE_POST', payload: state.cart[index]})
    }

    return (
        <div>
            <div>{props.name}</div>
            <div>
                <div>{props.price}</div>
                <div>{props.quantity}</div>
            </div>
           <div onClick={handleDelete}>Trash</div>
        </div>
    )
}

export default Header;

