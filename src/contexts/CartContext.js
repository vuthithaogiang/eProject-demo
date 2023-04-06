import React, { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '~/data/product';

export const CartContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem('test-cart'));

const getDefaultCartEmpty = () => {
    let cartEmpty = {};
    for (let i = 1; i < PRODUCTS.length + 1; ++i) {
        cartEmpty[i] = 0;
    }
    return cartEmpty;
};

const getDefaultCart = () => {
    let cart = {};

    if (cartFromLocalStorage === {} || !cartFromLocalStorage) {
        cart = getDefaultCartEmpty();
    } else {
        cart = cartFromLocalStorage;
    }
    return cart;
};

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const [paySuccess, setPaySuccess] = useState(false);

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * (itemInfo.price - (itemInfo.price * itemInfo.sale) / 100);
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        getDefaultCartEmpty,
        paySuccess,
        setPaySuccess,
    };
    console.log(paySuccess);

    useEffect(() => {
        localStorage.setItem('test-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};
