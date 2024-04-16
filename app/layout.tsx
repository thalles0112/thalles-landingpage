import type { Metadata } from "next";
import "./globals.css";
import HeaderDesktop from "./components/header-desktop/header";
import MobileHeader from "./components/header-mobile/header";
import { Nunito } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'


const nunito = Nunito({subsets: ["latin"]})
export const metadata: Metadata = {
  title: "Thalles Oliveira - Desenvolvimento",
  description: "Conheça Thalles, desenvolvedor web fullstack especializado em soluções ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={nunito.className}>
        <HeaderDesktop/>
        {children}
        <MobileHeader/>
        <GoogleAnalytics gaId="G-5G8LS8YY5Z"/> 
        </body>
    </html>
  );
}
