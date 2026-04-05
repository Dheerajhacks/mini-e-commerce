import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Shopping Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Discover Your Next <span className="text-indigo-400">Favorite Thing</span>
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-300 mb-10">
          Explore our curated collection of premium products. From high-end electronics to trendy fashion, find exactly what you're looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
            Shop Collection <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="px-8 py-4 text-lg rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
            View Offers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
