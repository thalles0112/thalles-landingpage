import type { Metadata } from "next";
import "./globals.css";
import HeaderDesktop from "./components/header-desktop/header";
import MobileHeader from "./components/header-mobile/header";
import { Nunito } from "next/font/google";


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
        </body>
    </html>
  );
}
