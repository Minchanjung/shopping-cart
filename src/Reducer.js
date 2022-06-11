import React from "react";

const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload
            };
        case 'ADD_POST':
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            };
        case 'REMOVE_POST':
            return {
                ...state,
                cart: state.cart.filter(post => post.id !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;