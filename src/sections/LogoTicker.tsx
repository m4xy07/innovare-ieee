"use client";
import InnovareMarquee from "@/assets/InnovareMarquee.png";
import IEEELogo from "@/assets/IEEELogo.png";
import PCULogo from "@/assets/PCULogo.png";
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
            <Image
              src={InnovareMarquee}
              alt="Innovare Logo"
              className="logo-ticker-image"
            />
            <Image
              src={IEEELogo}
              alt="IEEE Logo"
              className="logo-ticker-image"
            />
            <Image
              src={PCULogo}
              alt="PCU Logo"
              className="logo-ticker-image"
            />
            <Image
              src={InnovareMarquee}
              alt="Innovare Logo"
              className="logo-ticker-image"
            />
            <Image
              src={IEEELogo}
              alt="IEEE Logo"
              className="logo-ticker-image"
            />
            <Image
              src={PCULogo}
              alt="PCU Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos for animation */}
            <Image
              src={InnovareMarquee}
              alt="Innovare Logo"
              className="logo-ticker-image"
            />
            <Image
              src={IEEELogo}
              alt="IEEE Logo"
              className="logo-ticker-image"
            />
            <Image
              src={PCULogo}
              alt="PCU Logo"
              className="logo-ticker-image"
            />
            <Image
              src={InnovareMarquee}
              alt="Innovare Logo"
              className="logo-ticker-image"
            />
            <Image
              src={IEEELogo}
              alt="IEEE Logo"
              className="logo-ticker-image"
            />
            <Image
              src={PCULogo}
              alt="PCU Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
