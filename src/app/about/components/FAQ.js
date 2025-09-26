"use client";

import { useState, useMemo } from "react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // FAQ data structure
  const faqData = [
    {
      id: 0,
      question: "Koliko dugo traje proizvodnja HTZ opreme?",
      answer: "Standardna proizvodnja traje 2-4 nedelje, u zavisnosti od složenosti proizvoda i količine. Za hitne slučajeve možemo organizovati ekspresnu proizvodnju u roku od 3-5 dana."
    },
    {
      id: 1,
      question: "Da li radite po meri i kako funkcioniše proces?",
      answer: "Da, radimo isključivo po meri. Proces uključuje: konsultacije, merenje, kreiranje uzorka, odobravanje od strane klijenta, i tek onda početak proizvodnje. Pružamo besplatne konsultacije i merenje."
    },
    {
      id: 2,
      question: "Koje materijale koristite u proizvodnji?",
      answer: "Koristimo samo najkvalitetnije materijale: fire-resistant tkanine, nomex, kevlar, i druge specijalizovane materijale koji zadovoljavaju najstrože sigurnosne standarde. Svi materijali imaju potrebne sertifikate."
    },
    {
      id: 3,
      question: "Da li pružate garanciju na proizvode?",
      answer: "Da, pružamo 2 godine garancije na sve naše proizvode. Garancija pokriva defekte u materijalu i radovima. Takođe, pružamo besplatno održavanje i popravke tokom garancijskog perioda."
    },
    {
      id: 4,
      question: "Kako možemo da naručimo vaše usluge?",
      answer: "Možete nas kontaktirati telefonom, emailom, ili direktno u našoj radnji. Prvi korak je besplatna konsultacija gde ćemo razmotriti vaše potrebe, dati predloge i napraviti ponudu. Radimo sa fizičkim i pravnim licima."
    },
    {
      id: 5,
      question: "Da li radite sa velikim količinama i korporativnim klijentima?",
      answer: "Da, imamo iskustvo u radu sa velikim količinama i korporativnim klijentima. Možemo da proizvedemo i isporučimo stotine komada HTZ opreme u kratkom roku. Pružamo posebne cene za velike narudžbine i fleksibilne uslove plaćanja."
    }
  ];

  // Filter FAQs based on search query
  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return faqData;
    
    const query = searchQuery.toLowerCase();
    return faqData.filter(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Highlight search terms in text
  const highlightText = (text, query) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-yellow-900 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <section className="py-6 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Često postavljana pitanja
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Odgovori na najčešća pitanja o našim uslugama i proizvodima
          </p>
          
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Pretražite pitanja..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Search Results Counter */}
          {searchQuery && (
            <div className="mt-4 text-sm text-slate-400">
              {filteredFAQs.length === 0 ? (
                <span>Nema rezultata za "{searchQuery}"</span>
              ) : (
                <span>
                  {filteredFAQs.length} {filteredFAQs.length === 1 ? 'rezultat' : 'rezultata'} za "{searchQuery}"
                </span>
              )}
            </div>
          )}
        </div>

        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.591" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Nema rezultata</h3>
              <p className="text-slate-400 mb-4">
                Pokušajte sa drugim ključnim rečima ili kontaktirajte nas direktno.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Pokaži sva pitanja
              </button>
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              return (
                <div key={`faq-${faq.id}`} className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
                  <button 
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-800 transition-colors duration-200 cursor-pointer group rounded-t-lg"
                  >
                    <span className="text-base sm:text-lg font-semibold text-white pr-4">
                      {highlightText(faq.question, searchQuery)}
                    </span>
                    <svg 
                      className={`w-5 h-5 text-blue-400 transform transition-transform duration-200 flex-shrink-0 ${openItems[faq.id] ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems[faq.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 py-4">
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {highlightText(faq.answer, searchQuery)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
