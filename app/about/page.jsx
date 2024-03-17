import React from 'react';         
import "../globals.css";
import HeroSection from "../../Components/hero";
import WhyChooseUs from "@/Components/WhyChooseUs";
import StudentPlaced from "@/Components/StudentPlaced";
import Testimonials from "@/Components/Testimonials";
import LatestBlogs from "@/Components/LatestBlogs";

// const inter = Inter({ subsets: ["latin"] });



const YourPage = () => {
  return (
   <>
 
   <HeroSection />
    <WhyChooseUs/>
    <StudentPlaced/>
    <Testimonials/>
    <LatestBlogs/>
   </>
  );
};

export default YourPage;
