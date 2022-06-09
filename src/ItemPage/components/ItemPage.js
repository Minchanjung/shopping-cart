import React, { useEffect, useState, useContext }from "react";
import keyboards from "../../data/keyboards";
import { Context } from "../../Store";

const ItemPage = ({ match, cartState}) => {

    const [state, dispatch] = useContext(Context);
    const [cart, setCart] = useState(cartState);

    useEffect(() => {
        console.log(match);
    }, [])

    return (
        <div>hello</div>
    )
}

export default ItemPage;