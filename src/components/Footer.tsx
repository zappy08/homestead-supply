import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Homestead Supply & More"
                className="h-14 w-auto rounded"
              />
            </div>
            <p className="text-gray-300 max-w-md">
              Quality home goods, tools, and outdoor supplies for your homestead.
              Shop with confidence on Amazon with fast shipping and easy returns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=home-goods" className="text-gray-300 hover:text-white transition-colors">
                  Home Goods
                </Link>
              </li>
              <li>
                <Link href="/products?category=tools" className="text-gray-300 hover:text-white transition-colors">
                  Tools & Hardware
                </Link>
              </li>
              <li>
                <Link href="/products?category=outdoor" className="text-gray-300 hover:text-white transition-colors">
                  Outdoor & Garden
                </Link>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/s?me=AKDENCFW3A9SI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff9900] hover:text-[#ffaa22] transition-colors"
                >
                  Amazon Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Homestead Supply & More. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
