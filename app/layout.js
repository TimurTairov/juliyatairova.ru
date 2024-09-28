import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ваш личный психолог - Юлия Таирова",
  description: "Призвана помогать людям решать их проблемы",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`montserrat-font antialiased `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
