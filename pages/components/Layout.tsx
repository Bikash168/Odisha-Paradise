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
  FaTimes,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Head>
        <title>Odisha Paradise Tours and Travels</title>
      </Head>

      {/* Header */}
      <header className="bg-[#f1f1ec] shadow-md sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-orange-400 text-black text-sm py-2">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-2 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1" /> Bhubaneswar, India
              </span>
              <span className="flex items-center">
                <FaPhoneAlt className="mr-1" /> +91 7008131282
              </span>
              <span className="flex items-center">
                <FaEnvelope className="mr-1" /> odishaparadise@gmail.com
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
          <Link href="/" className="flex items-center">
            <img src="/logo.webp" alt="Odisha Paradise Tours Logo" className="h-12 w-12 object-cover" />
            <div className="ml-3 text-[#316b9e]">
              <h1 className="text-xl font-bold">Odisha Paradise Tours & Travels</h1>
              <p className="text-sm italic">"Explore the Beauty of Odisha"</p>
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
            <Link href="/about" className="hover:text-blue-600">
              About Us
            </Link>
            <Link href="/tours" className="hover:text-blue-600">
              Tours
            </Link>
            <Link href="/travels" className="hover:text-blue-600">
              Travels
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
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
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p>
              When you are planning your vacation in odisha let us assit you with your holiday.We offer an online personalized itinerary planning & reservation service,where you receive a totally easy,simple & customized itinerary that meet your specific requirements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-blue-400">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/travels" className="hover:text-blue-400">
                  Travels
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>
              Odisha paradise Tours & travels

              <br />
              Plot-1218,LIG K-4,Khandagiri,<br />
              Bhubaneswar,odisha<br />

            </p>
            <br />
            <p>Email: odishaparadise@gmail.com</p>
            <p>Phone: +91 7008131282</p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com" className="hover:text-blue-400">
                <FaXTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" className="hover:text-blue-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" className="hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.youtube.com" className="hover:text-blue-400">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.whatsapp.com" className="hover:text-blue-400">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          &copy; {new Date().getFullYear()} Odisha Paradise Tours & Travels. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
