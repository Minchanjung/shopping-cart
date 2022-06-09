import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./shop/components/Shop";
import React, { useState } from 'react';
import keyboards from "./data/keyboards";
import ItemPage from "./ItemPage/components/ItemPage";
import Store from "./Store";

const RouterSwitch = () => {

    const [cart, setCart] = useState([]);

    return (

        <Store>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App cartState={cart} />} />
                    <Route path="/shop" element={<Shop cartState={cart} />} />
                    <Route path="/shop/:id" element={<ItemPage cartState={cart} />} />
                </Routes>
            </BrowserRouter>
        </Store>
        
    )
}

export default RouterSwitch;

//{id: keyboards[0].id, name: keyboards[0].name, quantity: 1, price: keyboards[0].price}