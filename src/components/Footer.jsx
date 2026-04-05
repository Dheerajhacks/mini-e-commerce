import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Mail } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors">
              <Store className="h-8 w-8 text-indigo-500" />
              <span className="font-bold text-2xl tracking-tight">LuxeCart</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for premium lifestyle products. We bring you the best quality items from around the globe with exceptional customer service.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">All Products</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Electronics</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Jewelry</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Men's Clothing</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Women's Clothing</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay in the loop</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <Button type="submit" className="w-full justify-center">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} LuxeCart Inc. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
