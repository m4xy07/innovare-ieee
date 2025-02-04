"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import EcosystemIcon from "../assets/ecosystem.svg";
import { Feature } from "./feature";
import Technology from "../public/images/Technology.png";
import Empowerment from "images/Empowerment.png";
import Community from ".images/Community.png";

const features = [
  {
    imageSrc: Technology.src,
    title: "Advancing Technology",
    description:
      "IEEE fosters innovation by supporting research, publishing standards, and organizing technical conferences, driving technological solutions for societal challenges.",
    width: 100,
    height: 100,
  },
  {
    imageSrc: Empowerment.src,
    title: "Empowering Students",
    description:
      "IEEE Student Chapters provide resources, mentorship, and hands-on opportunities, enabling students to develop skills, network, and lead impactful projects.",
    width: 75,
    height: 75,
  },
  {
    imageSrc: Community.src,
    title: "Community Outreach",
    description:
      "Through international conferences and seminars, student chapters address local and global issues, promoting sustainable development and societal well-being.",
    width: 115,
    height: 115,
  },
];

export const Features = () => {
  return (
    <section className="s:py-12 bg-black text-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title text-white">
            Making an impact on society
          </h2>
          <p className="section-description mt-5 text-white text-opacity-30">
            Empowering students, advancing technology, and transforming
            communities for a better tomorrow.
          </p>
        </div>
        <div className="mt-16 flex flex-col md:flex-row gap-4 justify-center">
          {features.map(({ imageSrc, title, description, height, width }) => (
            <Feature
              imageSrc={imageSrc}
              title={title}
              description={description}
              height={height}
              width={width}
              key={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
