"use client";

import { useState } from "react";
import CopyableContactItem from "./CopyableContactItem";

export default function ContactSection() {
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
    <section className="py-6 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Kontakt informacije</h2>
              <p className="text-lg text-slate-300 mb-8">
                Kontaktirajte nas direktno putem telefona ili email-a. Naš tim je uvek spreman 
                da vam pruži stručnu podršku i odgovori na sva vaša pitanja.
              </p>
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-4 p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Telefon</h3>
                <CopyableContactItem 
                  text="+381 12 345 6789"
                  item="phone"
                  copiedItem={copiedItem}
                  onCopy={copyToClipboard}
                  className="text-2xl font-semibold text-green-400 hover:text-green-300 transition-colors duration-200 cursor-pointer flex items-center gap-2"
                />
                <p className="text-slate-400 mt-2">Kliknite da kopirate broj</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-center space-x-4 p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
                <CopyableContactItem 
                  text="info@htzoprema.rs"
                  item="email"
                  copiedItem={copiedItem}
                  onCopy={copyToClipboard}
                  className="text-2xl font-semibold text-blue-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer flex items-center gap-2"
                />
                <p className="text-slate-400 mt-2">Kliknite da kopirate email</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center space-x-4 p-6 bg-slate-900 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Radno vreme</h3>
                <p className="text-slate-300 text-lg">Ponedeljak - Petak: 08:00 - 16:00</p>
                <p className="text-slate-300 text-lg">Subota: 09:00 - 13:00</p>
                <p className="text-slate-400 mt-2">Nedelja: Zatvoreno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
