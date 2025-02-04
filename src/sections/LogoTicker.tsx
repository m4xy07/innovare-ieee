"use client";
import InnovareMarquee from "@/assets/InnovareMarquee.png";
import IEEELogo from "@/assets/IEEELogo.png";
import PCULogo from "@/assets/PCULogo.png";
import IEEECS from "@/assets/ieeecs.webp";
import IEEEBombay from "@/assets/bombay.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-black">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <motion.img
              src={InnovareMarquee.src}
              alt="Innovare Logo"
              className="logo-ticker-image"
            />
            <Image
              src={IEEELogo.src}
              alt="IEEE Logo"
              className="logo-ticker-image"
            />
            <Image
              src={PCULogo.src}
              alt="PCU Logo"
              className="logo-ticker-image"
            />
            <Image
              src={IEEECS.src}
              alt="IEEE CS Logo"
              className="logo-ticker-image"
            />
            <Image
              src={IEEEBombay.src}
              alt="IEEE Bombay Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos for animation */}
            <Image
              src={InnovareMarquee.src}
              alt="Innovare Logo"
              className="logo-ticker-image"
            />
            <Image
              src={IEEELogo.src}
              alt="IEEE Logo"
              className="logo-ticker-image"
            />
            <Image
              src={PCULogo.src}
              alt="PCU Logo"
              className="logo-ticker-image"
            />
            <Image
              src={IEEECS.src}
              alt="IEEE CS Logo"
              className="logo-ticker-image"
            />
            <Image
              src={IEEEBombay.src}
              alt="IEEE Bombay Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
