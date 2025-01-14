import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Gain } from "@/sections/Gain";
import Navbar from "@/sections/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Features />
      <Gain />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
