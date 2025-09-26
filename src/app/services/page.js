import Image from "next/image";
import { getBlurDataURL } from "@/utils/getBlurDataURL";

export const metadata = {
  title: "Naše usluge - HTZ Oprema | Proizvodnja, šivenje i konsulting",
  description: "Kompletan spektar usluga HTZ opreme: proizvodnja po meri, šivenje i dorada, stručni konsulting, održavanje i servis. Profesionalne usluge najvišeg kvaliteta.",
  keywords: "HTZ oprema, proizvodnja po meri, šivenje, konsulting, servis",
  openGraph: {
    title: "Naše usluge - HTZ Oprema | Proizvodnja, šivenje i konsulting",
    description: "Kompletan spektar usluga HTZ opreme: proizvodnja po meri, šivenje i dorada, stručni konsulting, održavanje i servis.",
    type: "website",
    locale: "sr_RS",
  },
};

export default async function Services() {
  const heroBlurDataURL = await getBlurDataURL('/hero-bg.jpg');
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Image
            src="/hero-bg.jpg"
            alt="HTZ Oprema - Naše usluge"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            {...(heroBlurDataURL && { placeholder: "blur", blurDataURL: heroBlurDataURL })}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4 bg-black/30 p-8 md:rounded-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Naše usluge
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
              Kompletan spektar usluga u oblasti proizvodnje i šivenja HTZ opreme
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Naše usluge</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Pružamo kompletan spektar profesionalnih usluga u oblasti proizvodnje i šivenja HTZ opreme
            </p>
      </div>

          <div className="space-y-12">
            {/* Service 1: Proizvodnja HTZ opreme */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Proizvodnja HTZ opreme</h3>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Specijalizovani smo za proizvodnju visokokvalitetne HTZ opreme prema najstrižim standardima. 
                    Naš tim stručnjaka koristi najsavremeniju tehnologiju i najkvalitetnije materijale kako bi 
                    proizveo opremu koja zadovoljava sve vaše specifične zahteve i potrebe.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">Prilagođeni dizajn prema vašim specifikacijama</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">Kvalitetni materijali najvišeg standarda</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">Savremena CNC tehnologija proizvodnje</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">Stroga kontrola kvaliteta u svakom koraku</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Šivenje i dorada */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Šivenje i dorada</h3>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Pružamo profesionalne usluge šivenja i dorade postojeće HTZ opreme. Naš tim majstora 
                    poseduje dugogodišnje iskustvo u preciznom šivenju i doradi opreme, osiguravajući 
                    da svaki proizvod zadovolji najviše standarde kvaliteta i funkcionalnosti.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300">Profesionalno šivenje po najvišim standardima</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300">Dorada i popravka postojeće opreme</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300">Brza isporuka i fleksibilni rokovi</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300">Garantovana kvaliteta izrade</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: Konsalting */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Stručni konsulting</h3>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Naš tim stručnjaka pruža sveobuhvatan konsulting za izbor, održavanje i optimizaciju 
                    HTZ opreme. Pomažemo vam da donesete najbolje odluke koje će maksimalno zadovoljiti 
                    vaše poslovne potrebe i zahteve.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300">Stručni saveti za izbor opreme</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300">Analiza vaših specifičnih potreba</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300">Optimalna rešenja za vaš budžet</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300">Podrška u implementaciji rešenja</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4: Održavanje i servis */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Održavanje i servis</h3>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Pružamo kompletan servis i održavanje HTZ opreme kako bi osigurali njen optimalan rad 
                    i dugotrajnost. Naš tim tehničara je specijalizovan za održavanje svih vrsta opreme 
                    i pruža brzu i efikasnu podršku.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300">Redovno održavanje opreme</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300">Brza dijagnostika i popravka</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300">Zamena delova i komponenti</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300">24/7 tehnička podrška</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
