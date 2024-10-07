import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/homepage/Navbar";
import 'animate.css';
import Footer from "@/components/homepage/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Gocingo",
  description: "Gocingo is a non-profit platform designed to connect donors with those in need. Through Gocingo, individuals can easily donate to various causes, helping provide essential support to vulnerable communities.",
  keywords: "non-profit, donation, charity, support, needy, Gocingo"
};

export default function RootLayout({ children }) {




  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
