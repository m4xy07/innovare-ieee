import { Header } from "@/sections/Header";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import Philosophy from "@/sections/Philosophy";
import MissionSec from "@/sections/MissionSec";
import VisionSec from "@/sections/VisionSec";
import ObjectiveSec from "@/sections/ObjectiveSec";
import Navbar from "@/sections/Navbar";



export default function Mission() {
  return (
    <>
      <Navbar />
      <ObjectiveSec />
      <MissionSec />
      <VisionSec />
      <CallToAction />
      <Footer />
    </>
  );
}
