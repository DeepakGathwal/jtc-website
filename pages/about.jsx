import React, { useEffect } from 'react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";             
import "../app/globals.css";
import HeroSection from "../Components/hero";
import WhyChooseUs from "@/Components/WhyChooseUs";
// import StudentPlaced from "@/Components/StudentPlaced";
// import Testimonials from "@/Components/Testimonials";
// import LatestBlogs from "@/Components/LatestBlogs";
// const inter = Inter({ subsets: ["latin"] });



const YourPage = () => {
  return (
   <>
    <Header />
    <HeroSection />
    <WhyChooseUs/>
    {/* <StudentPlaced/>
    <Testimonials/>
    <LatestBlogs/> */}
    <Footer />
   </>
  );
};

export default YourPage;
