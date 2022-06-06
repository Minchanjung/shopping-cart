import React from "react";
import '../styles/Item.css';

const Item = (props) => {
    return (
        <div className="itemContainer">
            <img id="itemImg" src={props.imgSrc} alt={props.itemName}></img>
            <div className="textAreaContainer">
                <h3 id="productName">{props.itemName}</h3>
                <div id="productPrice">$ {props.productPrice.toString()}</div>
            </div>
        </div>
    )
}

export default Item;