import { quantity } from "echarts/types/src/util/number.js";
import { createContext, useState, useEffect, useContext, Children } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(()=> {
        const savedCart = localStorage.getItem('ecommerce_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    useEffect(()=>{
        localStorage.setItem('ecommerce_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) =>{
            const existingItem = prevCart.find((item) => item.id === product.id);
            if(existingItem){
                return prevCart.map((item) =>
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
            }
            return [...prevCart, {...product, quantity: 1}];
        })
    }

    const removeFromCart = (productId) =>{
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    }

    const updateQuantity = (productId, newQuantity) =>{
        if(newQuantity < 1) return;
        setCart((prevCart) =>{
            prevCart.map((item) =>
            item.id === productId ? {...item, quantity: newQuantity} : item)
        })
    }
    const clearCart = () =>{
        setCart([]);
    }
    const cartTotal = cart.reduce((total, item) => total + item.price*item.quantity, 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0)

    return (
        <CartContext.Provider 
        value={{Cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount}}
        >
            {children}
        </CartContext.Provider>
    )
}