import Image from "next/image";
import ContactSection from "@/app/contact/components/ContactSection";
import { getBlurDataURL } from "@/utils/getBlurDataURL";

export const metadata = {
  title: "Kontakt - HTZ Oprema | Telefon, email i radno vreme",
  description: "Kontaktirajte HTZ Oprema za besplatnu konsultaciju. Telefon: +381 12 345 6789, email: info@htzoprema.rs. Radno vreme: Pon-Pet 08:00-16:00, Sub 09:00-13:00.",
  keywords: "HTZ oprema, kontakt, konsultacija, proizvodnja, šivenje",
  openGraph: {
    title: "Kontakt - HTZ Oprema | Telefon, email i radno vreme",
    description: "Kontaktirajte HTZ Oprema za besplatnu konsultaciju. Telefon: +381 12 345 6789, email: info@htzoprema.rs.",
    type: "website",
    locale: "sr_RS",
  },
};

export default async function Contact() {
  const heroBlurDataURL = await getBlurDataURL('/contact-hero-bg.jpg');

  return (
    <div className="min-h-screen">

      {/* Hero Section with Background Image */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Image
            src="/contact-hero-bg.jpg"
            alt="HTZ Oprema - Kontakt"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            {...(heroBlurDataURL && { placeholder: "blur", blurDataURL: heroBlurDataURL })}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4 bg-black/30 p-8 md:rounded-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Kontaktirajte nas
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
              Spremni smo da odgovorimo na vaša pitanja i pomognemo vam sa vašim potrebama
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <ContactSection />


    </div>
  );
}
