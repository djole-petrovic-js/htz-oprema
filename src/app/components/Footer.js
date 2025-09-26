"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copiedItem, setCopiedItem] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const copyToClipboard = async (text, item) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      
      // Clear previous timeout if it exists
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set new timeout
      const newTimeoutId = setTimeout(() => setCopiedItem(null), 2000);
      setTimeoutId(newTimeoutId);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">HTZ Oprema</h3>
                <p className="text-sm text-slate-400 -mt-1">Proizvodnja i šivenje</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto sm:mx-0">
              Profesionalna proizvodnja i šivenje HTZ opreme najvišeg kvaliteta. 
              Kvalitet, pouzdanost i inovacija u svakom proizvodu.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Navigacija</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Usluge
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  O nama
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Kontakt</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <button 
                  onClick={() => copyToClipboard("+381123456789", "phone")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center gap-2"
                >
                  +381 12 345 6789
                  {copiedItem === "phone" && (
                    <span className="text-xs text-blue-300">✓</span>
                  )}
                </button>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <button 
                  onClick={() => copyToClipboard("info@htzoprema.rs", "email")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center gap-2"
                >
                  info@htzoprema.rs
                  {copiedItem === "email" && (
                    <span className="text-xs text-blue-300">✓</span>
                  )}
                </button>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-slate-300">
                  <p className="text-xs sm:text-sm">Pon-Pet: 08:00-16:00</p>
                  <p className="text-xs sm:text-sm">Sub: 09:00-13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm text-center">
            © {currentYear} HTZ Oprema. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
