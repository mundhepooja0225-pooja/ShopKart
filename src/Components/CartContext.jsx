import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = ( product ) => {
        const existingProduct = cart.find(
            item => item.id === product.id
        );

        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id
                ? {...item, quantity: item.quantity + 1 }
                :item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    };

    const increaseQuantity = (id) => {
       setCart(cart.map(item =>
        item.id === id
        ? { ...item, quantity: item.quantity + 1}
        :item
    ));
    };

    const decreaseQuantity = (id) => {
        setCart(cart.map(item =>
            item.id == id
            ? { ...item, quantity: item.quantity -1}
            :item
        ).filter(item => item.quantity > 0)
    );
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
