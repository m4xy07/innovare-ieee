import { Header } from "@/sections/Header";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import Philosophy from "@/sections/Philosophy";
import MissionSec from "@/sections/MissionSec";
import VisionSec from "@/sections/VisionSec";
import ObjectiveSec from "@/sections/ObjectiveSec";



export default function Mission() {
  return (
    <>
      <Header />
      <ObjectiveSec />
      <MissionSec />
      <VisionSec />
      <CallToAction />
      <Footer />
    </>
  );
}
