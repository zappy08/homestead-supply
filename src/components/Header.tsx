'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Homestead Supply & More"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#1e3a5f] hover:text-[#2d4a6f] font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-[#1e3a5f] hover:text-[#2d4a6f] font-medium transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-[#1e3a5f] hover:text-[#2d4a6f] font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-[#1e3a5f] hover:text-[#2d4a6f] font-medium transition-colors">
              Contact
            </Link>
            <a
              href="https://www.amazon.com/s?me=AKDENCFW3A9SI"
              target="_blank"
              rel="noopener noreferrer"
              className="amazon-btn"
            >
              Shop on Amazon
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#1e3a5f]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-100 pt-4">
            <Link
              href="/"
              className="block py-2 text-[#1e3a5f] hover:text-[#2d4a6f] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block py-2 text-[#1e3a5f] hover:text-[#2d4a6f] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block py-2 text-[#1e3a5f] hover:text-[#2d4a6f] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-[#1e3a5f] hover:text-[#2d4a6f] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://www.amazon.com/s?me=AKDENCFW3A9SI"
              target="_blank"
              rel="noopener noreferrer"
              className="amazon-btn inline-block mt-2"
            >
              Shop on Amazon
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
