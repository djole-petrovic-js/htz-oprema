import Image from "next/image";
import FAQ from "./components/FAQ";

export const metadata = {
  title: "O nama - HTZ Oprema | Istorija, tim i tehnologija",
  description: "Saznajte više o HTZ Oprema - dugogodišnje iskustvo u proizvodnji zaštitne opreme. Naš tim stručnjaka i najsavremenija tehnologija za najkvalitetnije proizvode.",
  keywords: "HTZ oprema, o nama, tim stručnjaka, tehnologija, iskustvo",
  openGraph: {
    title: "O nama - HTZ Oprema | Istorija, tim i tehnologija",
    description: "Saznajte više o HTZ Oprema - dugogodišnje iskustvo u proizvodnji zaštitne opreme. Naš tim stručnjaka i najsavremenija tehnologija.",
    type: "website",
    locale: "sr_RS",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Image
            src="/hero-bg.jpg"
            alt="HTZ Oprema - O nama"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4 bg-black/30 p-8 md:rounded-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              O nama
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto drop-shadow-md">
              Dugogodišnje iskustvo u proizvodnji i šivenju HTZ opreme najvišeg kvaliteta
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-6 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Naša priča</h2>
              <div className="space-y-6 text-lg text-slate-300">
                <p>
                  HTZ Oprema je osnovana sa vizijom da pruži najkvalitetnije rešenja u oblasti 
                  proizvodnje i šivenja HTZ opreme. Kroz više od 15 godina rada, stekli smo 
                  bogato iskustvo i izgradili snažnu reputaciju među našim klijentima.
                </p>
                <p>
                  Naša kompanija je počela kao mala porodična firma sa ciljem da pruži 
                  personalizovane usluge i visokokvalitetne proizvode. Danas smo jedan od 
                  vodećih proizvođača HTZ opreme u regionu.
                </p>
                <p>
                  Specijalizovani smo za proizvodnju opreme visokog tehničkog zahteva, 
                  koristeći najsavremeniju tehnologiju i najkvalitetnije materijale. 
                  Naš tim stručnjaka kontinuirano se usavršava kako bi zadovoljio sve 
                  potrebe naših klijenata.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 shadow-2xl">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">Naša tehnologija</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">CNC mašine</h5>
                      <p className="text-slate-300 text-sm">Precizna obrada materijala sa najnovijim CNC tehnologijama</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">Automatski sistemi</h5>
                      <p className="text-slate-300 text-sm">Napredni automatski sistemi za kontrolu kvaliteta</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">Kontrola kvaliteta</h5>
                      <p className="text-slate-300 text-sm">Stroga kontrola kvaliteta u svakom koraku proizvodnje</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">Održavanje</h5>
                      <p className="text-slate-300 text-sm">Kompletno održavanje i servis proizvedene opreme</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-6 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Naša putanja</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ključni trenuci u razvoju naše kompanije
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            
            <div className="space-y-12">
              {/* 2008 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors duration-200">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2008</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Osnivanje kompanije</h3>
                    <p className="text-slate-300">Početak sa malim timom od 3 zaposlena i prva HTZ oprema</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-800"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              {/* 2012 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-800"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors duration-200">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2012</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Prva ISO sertifikacija</h3>
                    <p className="text-slate-300">Dobili smo ISO 9001:2008 sertifikat za sistem upravljanja kvalitetom</p>
                  </div>
                </div>
              </div>
              
              {/* 2016 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors duration-200">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2016</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proširenje proizvodnje</h3>
                    <p className="text-slate-300">Uvedene CNC mašine i automatski sistemi za kontrolu kvaliteta</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-800"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              {/* 2020 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-800"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors duration-200">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2020</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Digitalna transformacija</h3>
                    <p className="text-slate-300">Implementirali smo digitalne sisteme za upravljanje proizvodnjom</p>
                  </div>
                </div>
              </div>
              
              {/* 2024 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors duration-200">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2024</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Nagrada za kvalitet</h3>
                    <p className="text-slate-300">Dobili smo nagradu Privredne komore Srbije za kvalitet proizvoda</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-800"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Naša misija i vrednosti</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Posvećeni smo pružanju najkvalitetnijih rešenja u oblasti HTZ opreme
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Kvalitet</h3>
              <p className="text-slate-300">
                Koristimo samo najkvalitetnije materijale i najsavremeniju tehnologiju 
                za proizvodnju HTZ opreme koja zadovoljava najviše standarde.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Pouzdanost</h3>
              <p className="text-slate-300">
                Dugogodišnje iskustvo i hiljade zadovoljnih klijenata govore o našoj 
                pouzdanosti i profesionalnosti u svakom projektu.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Inovacija</h3>
              <p className="text-slate-300">
                Kontinuirano usavršavamo naše procese i uvode najnovije tehnologije 
                kako bismo pružili najbolja rešenja našim klijentima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-6 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Naš tim</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stručni tim sa dugogodišnjim iskustvom u oblasti HTZ opreme
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-lg text-center border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Marko Petrović</h3>
              <p className="text-blue-400 mb-4">Direktor i osnivač</p>
              <p className="text-slate-300 text-sm">
                20+ godina iskustva u proizvodnji HTZ opreme. Specijalizovan za 
                razvoj novih proizvoda i strategijsko upravljanje.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-lg text-center border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Ana Jovanović</h3>
              <p className="text-blue-400 mb-4">Glavni inženjer</p>
              <p className="text-slate-300 text-sm">
                Magistar mašinstva sa 15 godina iskustva. Odgovorna za tehnički 
                razvoj i kontrolu kvaliteta svih proizvoda.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-lg text-center border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-2xl">N</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Nikola Stojanović</h3>
              <p className="text-blue-400 mb-4">Voditelj proizvodnje</p>
              <p className="text-slate-300 text-sm">
                Specijalista za šivenje i doradu HTZ opreme sa 12 godina iskustva. 
                Vodi tim od 15 stručnjaka u proizvodnji.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <FAQ />

    </div>
  );
}
