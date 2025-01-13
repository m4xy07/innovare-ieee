"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import InnovareLogo from "@/assets/InnovareLogo.png";
import Robot1 from "@/assets/Website_Robot_1.png";
import Robot2 from "@/assets/Website_Robot_2.png";
import Robot3 from "@/assets/Website_Robot_3.png";
import Orb1 from "@/assets/Orb1.png";
import Orb2 from "@/assets/Orb2.png";
import Orb3 from "@/assets/Orb3.png";
import Orb4 from "@/assets/Orb4.png";
import Orb5 from "@/assets/Orb5.png";
import Orb6 from "@/assets/Orb6.png";


import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  px,
} from "framer-motion";
import { useRef } from "react";

import { ShimmerButtonDemo2 } from "@/components/herobutton";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-black bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-hidden"
    >
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[3048px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_100%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-128px)]"></div>
      <div className="container relative">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">  
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mt-6">
              Innovare
            </h1>
            <p className="text-xl text-white tracking-tight text-opacity-60 mt-6">
              Innovate. 
              Inspire. 
              Impact.<br />
              PCU&apos;s IEEE Student Chapter.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <ShimmerButtonDemo2 />
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            
            
            <motion.img
              src={Robot2.src}
              alt="Piece1 image"
              className="md:absolute md:h-auto md:w-[500px] md:max-w-none md:-left-32 md:top-56 lg:left-40 lg:top-72 z-40"
              animate={{
                translateY: [20, -20],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={Robot1.src}
              alt="Robot image"
              className="md:absolute md:h-[442.8px] md:w-[345.6px] md:max-w-none md:-left-12 md:top-12 lg:left-60 lg:top-28 z-20"
              animate={{
                translateY: [-10, 10],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={Robot3.src}
              alt="Piece2 image"
              className="md:absolute md:h-auto md:w-[500px] md:max-w-none md:-left-32 md:top-24 lg:left-40 lg:top-32"
              animate={{
                translateY: [20, -20],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={Orb1.src}
              
              alt="Orb image"
              width={78.5}
              height={74}
              className="hidden md:block top-48 -left-[800px] md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={Orb2.src}
              width={220}
              alt="Orb image"
              className="hidden lg:block absolute top-[24px] -left-[20px]"
              style={{
                translateY: translateY,
              }}
            />
             <motion.img
              src={Orb6.src}
              alt="Orb image"
              width={77.4}
              height={72}
              className="hidden lg:block absolute top-[16px] -right-[240px]"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={Orb4.src}
              width={225.6}
              height={192.8}
              alt="Orb image"
              className="hidden lg:block absolute -bottom-[20px] -right-[260px]"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={Orb5.src}
              width={62.5}
              height={61.5}
              alt="Orb image"
              className="hidden lg:block absolute bottom-[8px] -right-[60px]"
              style={{
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
