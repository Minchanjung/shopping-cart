import React, { useEffect, useState, useContext }from "react";
import keyboards from "../../data/keyboards";
import { Context } from "../../Store";
import Header from "../../Header";
import Footer from "../../Footer";
import "../styles/ItemPage.css";
import { useParams } from "react-router-dom";

const ItemPage = ({ match, cartState}) => {

    const [state, dispatch] = useContext(Context);
    const productId = useParams();
    const product = keyboards.find((product) => product.id === parseInt(productId.id));
    const testData = {cart: ['hi', 'hello']}
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        dispatch({type: 'SET_POSTS', payload: testData});
        dispatch({cart: 'test2'});
        dispatch({type: 'SET_POSTS', payload: {cart: ['hi']}})
    }, [])

    console.log(state)

    const handleAddCart = () => {
        dispatch({type: 'ADD_POST', payload: {name: product.name, price: product.price, quantity: quantity}})
    }

    const getInputValue = (event) => {
        setQuantity(event.target.value)
    }

    return (
        <div>
            <Header />

            <div className="productPageContentContainer">
                <img src={product.image_hi} alt="item"></img>
                <div className="productPageTextContainer">
                    <h1 id="pageName">{product.name}</h1>
                    <h2 id="pagePrice">$ {product.price}</h2>
                    <label htmlFor="quantityInput">Quantity</label>
                    <input type="number" id="quantityInput" min="1" max="10" defaultValue="1" onChange={getInputValue}></input>
                    <div id="addCartBtn" onClick={handleAddCart}>Add to Cart</div>
                    <p id="productPageDescription">
                        Please drop your email on "Notify Me When Available" if the product model is out of stock. {product.name} has included keycaps for both Windows and Mac operating systems. 
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ItemPage;