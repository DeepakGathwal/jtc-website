"use client"

import BannerAreaHome from "@/Components/BannerAreaHome";
import FeaturedCourses from "@/Components/FeaturedCourses";
import Header from "@/Components/Header";
import sal from 'sal.js';
import WhyChooseUs from "@/Components/WhyChooseUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StudentPlaced from "@/Components/StudentPlaced";
import Testimonials from "@/Components/Testimonials";
import LatestBlogs from "@/Components/LatestBlogs";
import Footer from "@/Components/Footer";
import Test from "@/Components/test";

export default function Home() {
  sal();
  
  return (
   <>
 
    <BannerAreaHome/>
    <WhyChooseUs/>
    <FeaturedCourses/>
    <StudentPlaced/>
    <Testimonials/>
    <LatestBlogs/>
 
    <Test/>
   </>
  );
}
