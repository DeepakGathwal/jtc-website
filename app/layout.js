import { Inter } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "JTC India",
  description: "Generated by create next app",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
