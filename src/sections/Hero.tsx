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
import Robot4 from "@/assets/Website_Robot_4.png";


import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

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
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-black bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip"
    >
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[3048px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_100%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-128px)]"></div>
      <div className="container relative">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">  
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mt-6">
              Innovare
            </h1>
            <p className="text-xl text-white tracking-tight text-opacity-60 mt-6">
              Text1
              Text2
              Text3
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">CTA</button>
              <button className="btn btn-text gap-1 text-white">
                <span>2nd CTA</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            
            
            <motion.img
              src={Robot2.src}
              alt="Piece1 image"
              className="md:absolute md:h-auto md:w-[500px] md:max-w-none md:-left-6 lg:left-40 lg:top-72 z-40"
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
              className="md:absolute md:h-[442.8px] md:w-[345.6px] md:max-w-none md:-left-6 lg:left-60 lg:top-28 z-20"
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
              className="md:absolute md:h-auto md:w-[500px] md:max-w-none md:-left-6 lg:left-40 lg:top-32"
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
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[400px] left-[700px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};
