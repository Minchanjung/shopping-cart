import React, { useEffect, useState, useContext }from "react";
import keyboards from "../../data/keyboards";
import { Context } from "../../Store";
import Header from "../../Header";
import Footer from "../../Footer";
import "../styles/ItemPage.css";
import { useParams } from "react-router-dom";

const ItemPage = ({ match, cartState}) => {

    const [state, dispatch] = useContext(Context);
    const [cart, setCart] = useState(cartState);
    const productId = useParams();
    const product = keyboards.find((product) => product.id === parseInt(productId.id));
    const testData = {cart: ['hi', 'hello']}

    useEffect(() => {
        dispatch({type: 'SET_POSTS', payload: testData});
        dispatch({cart: 'test2'});
    }, [])

    return (
        <div>
            <Header cartState={cart} />

            <div className="productPageContentContainer">
                <img src={product.image} alt="item"></img>
                <div className="productPageTextContainer">
                    <div id="pageName">{product.name}</div>
                    <div id="pagePrice">$ {product.price}</div>
                    <div id="quantityContainer">
                        <label htmlFor="quantityInput">Quantity</label>
                        <input type="number" id="quantityInput" min="1" max="10" defaultValue="1"></input>
                    </div>
                    <div id="addCartBtn">Add to Cart</div>
                    <p id="productPageDescription">
                        Please drop your email on "Notify Me When Available" if the product model is out of stock.<br/>
                        Keychron K2 (Version 2) Wireless mechanical keyboard (Hot-swappable version)<br/> has included 
                        keycaps for both Windows and Mac operating systems. 
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ItemPage;