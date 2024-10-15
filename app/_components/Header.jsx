"use client"; // Marking this component as a client component

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768); // Change 768 to your breakpoint for mobile
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      {isMobile ? (
        // Mobile Header
        <header className="bg-white p-4 shadow-md flex md:hidden">
          <div className="container mx-auto flex justify-between items-center">
            <button 
              className="text-gray-800 focus:outline-none" 
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {!isOpen && (
              <img src="/logo.png" alt="Logo" className="h-10" />
            )}

            <div className={`flex-col items-center transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
              <ul className='flex flex-col items-center space-y-2'>
                <li>
                  <Link href="/coffee-menu" className="text-gray-800 hover:underline">Coffee Menu</Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-gray-800 hover:underline">About Us</Link>
                </li>
                <li>
                  <Link href="/find-us" className="text-gray-800 hover:underline">Find Us</Link>
                </li>
                <li>
                  <Link href="/catering" className="text-gray-800 hover:underline">Alowishus Catering</Link>
                </li>
              </ul>

              <div className="flex items-center justify-center mt-4">
                <Link href="/basket" className="mr-2">
                  <svg xmlns="" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                  </svg>
                </Link>

                <button className="bg-black text-white py-3 rounded-md">
                  Buy Gift Voucher
                </button>
              </div>
            </div>
          </div>
        </header>
      ) : (
        // Desktop Header
        <header className="bg-white p-4 shadow-md flex md:flex">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-14 mr-4" />
            </div>

            <div className="flex items-center space-x-6">
              <ul className='flex space-x-6 font-semibold text-sl'>
                <li>
                  <Link href="/coffee-menu" className="text-gray-800 hover:text-gray-600 hover:underline">Coffee Menu</Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-gray-800 hover:text-gray-600 hover:underline">About Us</Link>
                </li>
                <li>
                  <Link href="/find-us" className="text-gray-800 hover:text-gray-600 hover:underline">Find Us</Link>
                </li>
                <li>
                  <Link href="/catering" className="text-gray-800 hover:text-gray-600 hover:underline">Alowishus Catering</Link>
                </li>
              </ul>

              <Link href="/basket" className="mr-2">
                <svg xmlns="" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                </svg>
              </Link>

              <button className="bg-black text-white py-2 px-4 rounded-full">
                Buy Gift Voucher
              </button>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
