import { useEffect, useState, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menu state

  useEffect(() => {
    setMounted(true); // Ensures components render only on the client
  }, []);

  if (!mounted) {
    return null; // Prevents rendering on the server
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle hamburger menu state
  };

  return (
    <div>
      <Head>
        <title> Odisha Paradise Tours and Travels</title>
      </Head>

      {/* Header */}
      <header className="bg-[#f1f1ec] shadow-md sticky top-0 z-50">
        {/* Top Bar Section */}
        <div className="bg-orange-400 text-black text-sm py-2">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1" /> Bhubaneswar, India
              </span>
              <span className="flex items-center">
                <FaPhoneAlt className="mr-1" /> +91 9439173220
              </span>
              <span className="flex items-center">
                <FaEnvelope className="mr-1" /> info@odishaparadise.com 
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-600" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-red-600" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-green-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center w-full md:w-auto">
  <div className="flex items-center space-x-3">
    <img src="/logo.webp" alt="Odisha Paradise Tours Logo" className="h-12 logosi" />
    <div className="text-[#316b9e]">
      <h1 className="text-xl font-bold">Odisha Paradise Tours & Travels</h1>
      <p className="text-sm italic">"Explore the Beauty of Odisha"</p>
    </div>
  </div>
</Link>
          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-blue-600">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/travels" className="hover:text-blue-600">
                Travels
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link href="/about" className="hover:text-blue-600" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-blue-600" onClick={toggleMenu}>
                Tours
                </Link>
              </li>
              <li>
                <Link href="/travels" className="hover:text-blue-600" onClick={toggleMenu}>
                Travels
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

     {/* Footer */}
     <footer className="bg-green-600 text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg text-white font-bold mb-4">About Us</h3>
          <p className='text-white'>
            At Odisha Paradise, we believe in crafting unforgettable experiences that showcase the rich culture, heritage, and natural beauty of Odisha. Our journey began with a vision to promote tourism in this enchanting state, offering a gateway to explore its breathtaking landscapes, historic sites, and vibrant traditions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg text-white font-bold mb-4">Quick Links</h3>
          <ul>
            <li><Link href="/" className="text-white block hover:text-blue-400">Home</Link></li>
            <li><Link href="/about-us" className="text-white block hover:text-blue-400">About Us</Link></li>
            <li><Link href="/tours" className="text-white block hover:text-blue-400">Tours</Link></li>
            <li><Link href="/travels" className="text-white block hover:text-blue-400">Travels</Link></li>
            <li><Link href="/contact" className="text-white block hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg text-white font-bold mb-4">Contact Us</h3>
          <p className='text-white'>
            Trident Group of Institutions,<br />
            F2, Chandaka Industrial Estate,<br />
            Technology Corridor, Infocity Area,<br />
            Chandrasekharpur, Bhubaneswar,<br />
            Odisha. 751024
          </p>
          <br />
          <p>Email: <span className="text-white">info@odishaparadise.com</span></p>
          <p>Phone: <span className="text-white">+91 9439173220</span></p>
        </div>

        {/* Social Media Links */}
        <div className='flex items-center justify-between'>
          <h3 className="text-lg text-white font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/people/Sacred-Foundation/61565399609076/" className="hover:text-blue-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/sacred71444" className="hover:text-blue-400">
              <FaXTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/sacred.foundation/" className="hover:text-blue-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/sacred-foundation/" className="hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@sacredfoundation" className="hover:text-blue-400">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.youtube.com/@sacredfoundation" className="hover:text-blue-400">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-white text-center">
        <p>&copy; 2024 Odisha Paradise Tours and Travels.</p>
      </div>
    </footer>
    </div>
  );
}
