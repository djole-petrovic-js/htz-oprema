import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

/**
 * Metadata for the entire application.
 */
export const metadata = {
  authors: [{ name: "Djordje Petrovic" }],
  applicationName: "HTZ Oprema",
  generator: "Next.js",
}


export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
