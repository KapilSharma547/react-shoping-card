import React, { createContext, useReducer } from 'react'
import './cart.css'
import { products } from './products';
import ContextCart from './ContextCart';
import { reducer } from './reducer';

export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
};

const Cart = () => {

    //const [item, setItem] = useState(products);
    const [state, dispatch] = useReducer(reducer, initialState);

    //delet the item by the indivisiably
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        })
    };

    //  clear the cart

   const clearCart = () => {
        return dispatch ({ type: "CLEAR_CART" })
    };

    return (
        <CartContext.Provider value={{ ...state, removeItem, clearCart }}>
            <ContextCart />
        </CartContext.Provider>
    );
};

export default Cart;