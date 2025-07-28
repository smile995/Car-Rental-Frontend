"use client";

import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Apollo Gears</h3>
          <p className="text-sm text-gray-400">
            Apollo Gears is a high-quality automobile platform. We provide the best products and services for car lovers and mechanics.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/cars" className="hover:text-white">Cars</Link></li>
            <li><Link href="/" className="hover:text-white">Services</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://github.com" target="_blank" className="text-gray-400 hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Apollo Gears. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
