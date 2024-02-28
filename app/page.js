"use client"

import BannerAreaHome from "@/Components/BannerAreaHome";
import FeaturedCourses from "@/Components/FeaturedCourses";
import WhyChooseUs from "@/Components/WhyChooseUs";

import Faqs from "@/Components/faqs";
import StudentPlaced from "@/Components/StudentPlaced";
import Testimonials from "@/Components/Testimonials";
import LatestBlogs from "@/Components/LatestBlogs";


export default function Home() {
  
  return (
   <>  
    <BannerAreaHome/>
    <WhyChooseUs/>
     <FeaturedCourses/>
     <Faqs/>
    <StudentPlaced/>
    <Testimonials/>
    <LatestBlogs/>
   </>
  );
}
