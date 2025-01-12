import { Header } from "@/sections/Header";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { FutureEvents } from "@/sections/FutureEvents";
import { PastEvents } from "@/sections/PastEvents";





export default function Mission() {
  return (
    <>
      <Header />
      <FutureEvents/>
      <PastEvents/>
      <CallToAction />
      <Footer />
    </>
  );
}
