'use client'
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { text: "ראשי", href: "/" },
    { text: "אודות", href: "/about" },
    { text: "תחומי הטיפול", href: "/services" },
    { text: "בלוג", href: "/blog" },
    { text: "שאלות נפוצות", href: "/faq" },
    { text: "יצירת קשר", href: "/contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Social */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="font-bold text-2xl text-teal-400">יפית קרופניק</div>
              <div className="text-white/80 text-sm">דיאטנית קלינית</div>
            </Link>
            
            <div className="flex gap-3 mt-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">ניווט מהיר</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">יצירת קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-1" />
                <span className="text-gray-400">רחוב דיזנגוף 50, תל אביב</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <Link href="tel:+972501234567" className="text-gray-400 hover:text-teal-400 transition-colors">
                  050-1234567
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <Link href="mailto:info@yafit-dietitian.co.il" className="text-gray-400 hover:text-teal-400 transition-colors">
                  info@yafit-dietitian.co.il
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          {/* <p>© {currentYear} יפית קרופניק - דיאטנית קלינית. כל הזכויות שמורות.</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;