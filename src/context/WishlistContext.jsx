import { createContext, useContext, useState, useEffect, Children } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({children}) =>{
    const [wishlist, setWishlist] = useState(() =>{
        const saved = localStorage.getItem('ecommerce_wishlist');
        return saved ? JSON.parse(saved) : [];
    })

    useEffect(() => {
        localStorage.setItem('ecommerce_wishlist', JSON.stringify(wishlist));
    }, [wishlist])

    const toggleWishlist = (product) =>{
        setWishlist((prev) =>{
            const exists = prev.find((item) => item.id === product.id);
            if(exists){
                toast.success('Removed from wishlist');
                return prev.filter((item) => item.id !== product.id);
            }
            else{
                toast.success('Added to wishlist');
                return [...prev, product];
            }
        })
    }

    const isInWishlist = (productId) =>{
        return wishlist.some((item) => item.id === productId);
    }

    return (
        <WishlistContext.Provider value={{wishlist, toggleWishlist, isInWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}