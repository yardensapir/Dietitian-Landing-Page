'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'ראשי', path: '/' },
    { name: 'אודות', path: '/about' },
    { name: 'תחומי הטיפול', path: '/services' },
    { name: 'בלוג', path: '/blog' },
    { name: 'שאלות נפוצות', path: '/faq' },
    { name: 'יצירת קשר', path: '/contact' },
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-10">
            <div className={`font-bold text-xl ${isScrolled ? 'text-teal-600' : 'text-teal-600'}`}>
              יפית קרופניק
            </div>
            <div className={`text-xs transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-700'}`}>
              דיאטנית קלינית
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? 'text-teal-600'
                    : `${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-teal-600`
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="tel:+972501234567"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isScrolled
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-teal-600 text-white hover:bg-teal-700'
              }`}
            >
              <Phone className="w-4 h-4" />
              צרו קשר
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-10 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-white z-0 transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
          >
            <div className="flex flex-col h-full justify-center items-center space-y-8 pt-16">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-xl font-medium ${
                    pathname === link.path ? 'text-teal-600' : 'text-gray-800 hover:text-teal-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                href="tel:+972501234567"
                className="flex items-center gap-2 px-6 py-3 mt-8 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                צרו קשר
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;