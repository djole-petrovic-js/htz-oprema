'use client';

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "500 - Server Error | HTZ Oprema",
  description: "Došlo je do greške na serveru. Molimo pokušajte ponovo ili kontaktirajte nas ako se problem nastavi.",
  keywords: "500, HTZ oprema, greška, server, podrška",
  robots: "noindex, nofollow",
};

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen">

      {/* 500 Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Image
            src="/hero-bg.jpg"
            alt="HTZ Oprema - Server Error"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4 bg-black/30 p-8 md:rounded-2xl">
            <div className="mb-8">
              <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-red-400 mb-4 leading-none">
                500
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
                Server Error
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Došlo je do greške na serveru. Molimo pokušajte ponovo ili kontaktirajte nas ako se problem nastavi.
              </p>
            </div>

            {/* Action Button */}
            <div className="flex justify-center">
              <button
                onClick={reset}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center gap-3 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Pokušaj ponovo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Text Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-800 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Šta možete da uradite?
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                <strong className="text-blue-400">1. Pokušajte ponovo</strong> - Kliknite na dugme &ldquo;Pokušaj ponovo&rdquo; iznad da biste ponovili operaciju.
              </p>
              <p>
                <strong className="text-green-400">2. Osvežite stranicu</strong> - Ponekad jednostavno osvežavanje stranice rešava problem.
              </p>
              <p>
                <strong className="text-purple-400">3. Kontaktirajte nas</strong> - Ako se problem nastavi, molimo kontaktirajte naš tim za podršku.
              </p>
              <p className="text-sm text-gray-400 mt-6">
                Ova greška je privremena i naš tim je već obavešten o problemu.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
