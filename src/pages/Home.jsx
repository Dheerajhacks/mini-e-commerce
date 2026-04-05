import React from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import { ProductSkeleton } from "../components/Skeleton";
import Hero from '../components/Hero';
import { Filter, ArrowUpDown, TrendingUp, ShieldCheck, Truck, Clock } from 'lucide-react';


const Home = () =>{
    return (
    <div className="bg-gray-50">
        <Hero />
    </div>);
}

export default Home;