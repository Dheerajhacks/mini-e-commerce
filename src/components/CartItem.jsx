import { Link } from "react-router-dom";
import { Minus, Plus, Trash2} from 'lucide-react';
import { useCart } from "../context/CartContext";

const CartItem = ({item}) =>{
    const { updateQuantity, removeFromCart} = useCart();
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 py-6 border-b border-gray-200 last:border-0">
            <Link to={`/product/${item.id}`} className="w-24 h-24 flex-shrink-0 bg-white rounded-md border border-gray-200 p-2">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
            </Link>

            <div className="flex-1 flex flex-col w-full">
                <div className="flex justify-between items-start">
                    <Link to={`/product/${item.id}`} className="text-base font-medium text-gray-900 hover:text-indigo-600 line-clamp-2 pr-4">
                        {item.title}
                    </Link>
                    <p className="text-base font-bold text-gray-900 whitespace-nowrap">
                        ${(item.price * item.quantity).toFixed(2)}
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-between w-full">
                    <div className="flex items-center border border-bray-300 rounded-md">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 text-gray-600 hover;text-indigo-600 hover:bg-gray-50 transistion-colors" 
                            disabled={item.quantity <= 1}>
                                <Minus className="w-4 h-4" ></Minus>

                        </button>
                        <span className="px-4 py-1 text-sm font-medium text-gray-900 border-x border-gray-300 min-w-[3rem] text-center">
                            {item.quantity}
                        </span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors">
                            <Plus className="w-4 h-4" />
                        </button>

                        <button onClick={() => removeFromCart(item.id)}
                        className="text-sm font-medium text-red-600 hover:text-red-500 flex items-center gap-1">
                            <Trash2 className="w-4 h-4" />
                            <span className="hidden sm:inline">Remove</span>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default CartItem;