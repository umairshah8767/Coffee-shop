"use client"; // Marking this component as a client component

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/coffee-menu" className="hover:underline">Coffee Menu</Link>
            <Link href="/about-us" className="hover:underline">About Us</Link>
            <Link href="/find-us" className="hover:underline">Find Us</Link>
            <Link href="/catering" className="hover:underline">Alowishus Catering</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-gray-400">
              <FaFacebookF size={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
