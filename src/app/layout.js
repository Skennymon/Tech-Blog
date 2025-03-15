import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kenny Dev Weblog",
  description: "Stuff that I use on a daily basis as an aspiring Web Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}


