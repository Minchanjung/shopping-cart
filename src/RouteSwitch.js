import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./shop/components/Shop";
import React from 'react';
import ItemPage from "./ItemPage/components/ItemPage";
import Store from "./Store";

const RouterSwitch = () => {

    return (

        <Store>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/shop/:id" element={<ItemPage />} />
                </Routes>
            </BrowserRouter>
        </Store>
        
    )
}

export default RouterSwitch;

//{id: keyboards[0].id, name: keyboards[0].name, quantity: 1, price: keyboards[0].price}