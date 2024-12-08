import FeaturedProducts from "@/Components/FeaturedProducts";
import Footer from "@/Components/Footer";
import Header from "@/Components/header";
import Hero from "@/Components/Hero";
import LatestProducts from "@/Components/LatestProducts";
import LeatestBlog from "@/Components/LeatestBlog";
import Navbar from "@/Components/NavBar";
import OneMore from "@/Components/OneMore";
import TrendingProducts from "@/Components/TrendingProducts";
import DiscountItem from "@/Components/DiscountItems";
import TopCategories from "@/Components/TopCatogories";
import UniqueProduct from "@/Components/UniqueFeature";
import Newsletter from "@/Components/Newsletter";

export default function Home() {
  return (
   <div>
    <Header/>
    <Navbar/>
    <Hero/>
    <FeaturedProducts/>
    <LatestProducts/>
    <OneMore/>
    <UniqueProduct/>
    <TrendingProducts/>
    <DiscountItem/>
    <TopCategories/>
    <Newsletter/>
    <LeatestBlog/>
    <Footer/>
   </div>
  );
}
