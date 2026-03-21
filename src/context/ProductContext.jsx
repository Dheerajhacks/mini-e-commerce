import { createContext, useState, useEffect, useContext } from "react";
import axiosfrom  from "axios";
import toast from "react-hot-toast";

const ProductContxext = createContext();

export const useProducts = () => useContext(ProductContxext);

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOrder, setSortOrder] = useState('default');

    useEffect(() => {
        const fetchData = async () =>{
            try{
                setLoading(true);
                const [ProductsRes, CategoriesRes] = await Promise.all([
                    axios.get('https://fakestoreapi.com/products'),
                    axios.get('https://fakestoreapi.com/products/categories')
                ]);

                const customProducts = JSON.parse(localStorage.getItem('ecommerce_custom_products') || '[]');

                setProducts(...customProducts, ...productsRes.data);

                const allCategories = new Set([...CategoriesRes.data, ...customerProducts.map(p => p.category)]);
                setCategories(['all', Array.from(allCategories)]);

                setError(null);
            }
            catch (err) {
                setError('Failed to fetch data. Please try again later');
            }
            finally{
                setLoading(false);
            }
        };

        fetchData();
        
    }, []);

        const addProduct = (newProduct) =>{
            const productWithMeta = {
                ...newProduct,
                id: `custom-${Date.now()}`,
                rating: {rate: 0, count: 0}
            };

            setProducts(prev => [productWithMeta, ...prev]);

            if(!categories.includes(productWithMeta.category)){
                setCategories(prev => [...prev, productWithMeta.category])
            }

            const customProducts = JSON.parse(localStorage.getItem('ecommerce_custom_products') || '[]');
            localStorage.setItem('ecommerce_custom_products', JSON.stringify([productWithMeta, ...customProducts]));

            toast.success("Product added successfully");
        }

        const filterProducts = products.filter((product) =>{
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
        if (sortOrder === 'low-high') return a.price - b.price;
        if (sortOrder === 'high-low') return b.price - a.price;
        return 0;
        });

        return (
            <ProductContext.Provider
                value={{
                    products : filterProducts,
                    categories,
                    loading,
                    error,
                    searchQuery,
                    setSearchQuery,
                    selectedCategory,
                    setSelectedCategory,
                    sortOrder,
                    setSortOrder,
                    addProduct
                }}
                >
                    {children}
            </ProductContext.Provider>
        )
}