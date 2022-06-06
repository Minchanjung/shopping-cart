import React, { useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import '../styles/Shop.css';
import keyboards from '../../data/keyboards'
import Item from "./Item";

const Shop = () => {

    return (
        <div>
            <Header />
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
                            <Item itemName={keyboard.name} productPrice={keyboard.price} imgSrc={keyboard.image} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shop;
