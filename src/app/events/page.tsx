import { Header } from "@/sections/Header";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { FutureEvents } from "@/sections/FutureEvents";
import { PastEvents } from "@/sections/PastEvents";
import Navbar from "@/sections/Navbar";





export default function Mission() {
  return (
    <>
      <Navbar />
      <FutureEvents/>
      <PastEvents/>
      <CallToAction />
      <Footer />
    </>
  );
}
