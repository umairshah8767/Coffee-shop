// components/Header.jsx
"use client"; // Marking this component as a client component

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white p-4 shadow-md  md:flex">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-14 mr-4" />
          </div>

          <div className="flex items-center space-x-6">
            <ul className='flex space-x-6'>
              <li>
                <Link href="/coffee-menu" className="text-gray-800 hover:text-gray-600">Coffee Menu</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-800 hover:text-gray-600">About Us</Link>
              </li>
              <li>
                <Link href="/find-us" className="text-gray-800 hover:text-gray-600">Find Us</Link>
              </li>
              <li>
                <Link href="/catering" className="text-gray-800 hover:text-gray-600">Alowishus Catering</Link>
              </li>
            </ul>

            <Link href="/basket" className="mr-2 transform transition-transform duration-300 hover:scale-105">
              <svg xmlns="" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 animate-basket-hover">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
              </svg>
            </Link>

            <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transform transition-transform duration-300 hover:scale-105">
              Buy Gift Voucher
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-white p-4 shadow-md md:hidden">
        <div className="container mx-auto flex justify-between items-center">

          {/* Toggle Button */}
          <button 
            className="text-gray-800 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg className="w-6 h-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Logo */}
          {!isOpen && (
            <img src="/logo.png" alt="Logo" className="h-10" />
          )}

          {/* Menu Items */}
          <div className={`flex-col items-center transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col items-center space-y-2'>
              <li>
                <Link href="/coffee-menu" className="text-gray-800 hover:text-gray-600">Coffee Menu</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-800 hover:text-gray-600">About Us</Link>
              </li>
              <li>
                <Link href="/find-us" className="text-gray-800 hover:text-gray-600">Find Us</Link>
              </li>
              <li>
                <Link href="/catering" className="text-gray-800 hover:text-gray-600">Alowishus Catering</Link>
              </li>
            </ul>

            <div className="flex items-center justify-center mt-4">
              <Link href="/basket" className="mr-2 bg-gray-50 hover:bg-gray-100 p-2 rounded-full shadow-md 
              hover:shadow-xl hover:scale-105 transition-all transform duration-300 hover:animate-basket-hover">
                <svg xmlns="" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                </svg>
              </Link>

              <button className="bg-black text-white py-3 rounded-md shadow-lg hover:scale-105 transform transition-transform duration-300">
                Buy Gift Voucher
              </button>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes basket-hover {
          0% { transform: translate(0); }
          25% { transform: translate(-2px, 0); }
          50% { transform: translate(2px, 0); }
          75% { transform: translate(-2px, 0); }
          100% { transform: translate(0); }
        }

        .animate-basket-hover:hover {
          animation: basket-hover 0.5s infinite;
        }
      `}</style>
    </>
  );
};

export default Header;
