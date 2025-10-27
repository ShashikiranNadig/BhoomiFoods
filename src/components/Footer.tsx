import Link from 'next/link'
import { Facebook, Instagram, Twitter, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <h3 className="text-xl font-playfair font-bold">Bhoomi Foods</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Authentic Taste. Pure Tradition. Bringing you the finest Indian traditional foods made with love and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-saffron transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-saffron transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-saffron transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-saffron transition-colors duration-200 text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-saffron transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-gray-300 hover:text-saffron transition-colors duration-200 text-sm">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-saffron transition-colors duration-200 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-saffron transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=pickles" className="text-gray-300 hover:text-saffron transition-colors duration-200 text-sm">
                  Pickles
                </Link>
              </li>
              <li>
                <Link href="/products?category=spices" className="text-gray-300 hover:text-saffron transition-colors duration-200 text-sm">
                  Spices
                </Link>
              </li>
              <li>
                <Link href="/products?category=chutneys" className="text-gray-300 hover:text-saffron transition-colors duration-200 text-sm">
                  Chutneys
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-saffron" />
                <span className="text-gray-300 text-sm">123 Food Street, Bangalore, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-saffron" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-saffron" />
                <span className="text-gray-300 text-sm">info@bhoomifoods.com</span>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Bhoomi Foods. All rights reserved. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
