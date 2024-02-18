"use client"
import BannerAreaHome from "@/Components/BannerAreaHome";
import FeaturedCourses from "@/Components/FeaturedCourses";
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
    <FeaturedCourses/>
   </>
  );
}
