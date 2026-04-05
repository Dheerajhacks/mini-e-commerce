import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Wishlist from "./pages/Wishlist"
import Profile from "./pages/Profile"
import AdminDashboard from "./pages/AdminDashboard"
import AdminAddProduct from "./pages/AdminAddProduct"
import { color } from "echarts"


function App() {

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Toaster 
      position="top-right" toastOptions={{
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
          borderRadius: '10px'
        },
        success: {
          style:{
            background: '#10B981',
          }
        }
      }}/>
    <Navbar />
    <main className="flex-grow flex flex-col">
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-product" element={<AdminAddProduct />} />
      </Routes>
    </main>
    </div>
  )
}

export default App
