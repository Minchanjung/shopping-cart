import React, { useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import '../styles/Shop.css';
import keyboards from '../../data/keyboards'
import Item from "./Item";
import { Link } from "react-router-dom";

const Shop = (props) => {

    const [cart, setCart] = useState(props.cartState);

    return (
        <div>
            <Header cartState={cart}/>
            <div className="banner">
                <h2 id="sectionTitle">Keychron Keyboards</h2>
                <div id="sectionDescription">Keychron Wireless Keyboard Collection</div>
            </div>
            <div className="filterContainer">
                <div id="totalItems">{keyboards.length} Products</div>
                <div id="filter">Featured &darr;</div>
            </div>
            <div className="shopBodyContainer">
                <div id="shopSideMenuContainer">
                    <div>&uarr; All Products</div>
                    <div>&uarr; Collection</div>
                </div>
                <div className="catalogContainer">
                    {keyboards.map((keyboard) => (
                        <Link to={`/shop/${keyboard.id}`}><Item itemName={keyboard.name} productPrice={keyboard.price} imgSrc={keyboard.image} /></Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shop;


