import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import toast from 'react-hot-toast';
import Button from './Button';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const isWished = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigating if wrapped in a Link somehow
    addToCart(product);
    toast.success(`${product.title.substring(0, 20)}... added to cart!`, {
      icon: '🛒',
    });
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">
      
      {/* Wishlist Button */}
      <button 
        onClick={handleWishlist}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-all"
      >
        <Heart className={`w-5 h-5 transition-colors ${isWished ? 'fill-pink-500 text-pink-500' : 'text-gray-400 hover:text-pink-500'}`} />
      </button>

      <Link to={`/product/${product.id}`} className="block relative pt-[100%] overflow-hidden bg-white p-4">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
        />
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick View
          </span>
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow border-t border-gray-50 bg-gray-50/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-1 rounded-md">
            {product.category}
          </span>
          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md shadow-sm border border-gray-100">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold text-gray-700">{product.rating.rate}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 line-clamp-2 hover:text-indigo-600 transition-colors mb-2 text-sm sm:text-base">
            {product.title}
          </h3>
        </Link>
        
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>
            <span className="text-xl font-black text-gray-900">${product.price.toFixed(2)}</span>
          </div>
          <Button 
            onClick={handleAddToCart}
            className="rounded-full w-10 h-10 p-0 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
