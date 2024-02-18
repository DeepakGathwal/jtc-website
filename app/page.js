"use client"
import BannerAreaHome from "@/Components/BannerAreaHome";
import Header from "@/Components/Header";
import sal from 'sal.js';
import WhyChooseUs from "@/Components/WhyChooseUs";

export default function Home() {
  sal();
  return (
   <>
    <Header />
    <BannerAreaHome/>
    <WhyChooseUs/>
   </>
  );
}
