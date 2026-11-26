import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCall } from "@/components/StickyCall";
import { Reveal } from "@/components/Reveal";
import { business, contact } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${business.name} | Mill Valley`,
    template: `%s | ${business.shortName}`,
  },
  description: `Shoe, watch, purse, luggage, and leather repair in Mill Valley for over 30 years. ${contact.street}, ${contact.city}. Call ${contact.phone}.`,
  icons: { icon: "/logo.svg" },
};

export const viewport = {
  themeColor: "#10251c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCall />
        <Reveal />
      </body>
    </html>
  );
}
