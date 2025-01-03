import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { Metrika } from "@/components/YaMetrika";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Юлия Таирова - психолог онлайн, оффлайн в Москве",
  description: "Психологическая помощь, игры и консультации онлайн или очно в Москве",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`montserrat-font antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
