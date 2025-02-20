"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WorldMapDemo } from "@/components/worldmap";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-black sm:py-12 md:py-24 overflow-x-clip"
      id="learn"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag text-white">IEEE</div>
          </div>
          <h2 className="section-title mt-5 text-white">
            What is IEEE
          </h2>
          <p className="section-description mt-5 text-white text-opacity-30">
            IEEE (Institute of Electrical and Electronics Engineers) is a global organization focused on advancing technology in areas like electrical engineering, computing, robotics, and telecommunications. It provides research publications, conferences, standards, and professional development opportunities.
          </p>
        </div>
        <WorldMapDemo/>
      </div>
    </section>
  );
};
