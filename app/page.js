import BannerAreaHome from "@/Components/BannerAreaHome";
import FeaturedCourses from "@/Components/FeaturedCourses";
import Header from "@/Components/Header";
import WhyChooseUs from "@/Components/WhyChooseUs";

export default function Home() {
  return (
   <>
    <Header />
    <BannerAreaHome/>
    <WhyChooseUs/>
    <FeaturedCourses/>
   </>
  );
}
