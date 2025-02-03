"use client"
import { useState } from 'react';
import { ShoppingBagIcon, UserIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems] = useState(3); // Example cart item count

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>

            {/* Logo */}
            <a href="#" className="text-xl font-bold text-gray-900">
              EcomShop
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button className="p-2 relative text-gray-700 hover:text-gray-900 transition-colors">
              <ShoppingBagIcon className="h-6 w-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>

            {/* Account */}
            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <UserIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 pt-16">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              type="button"
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}