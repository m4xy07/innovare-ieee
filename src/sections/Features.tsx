"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import EcosystemIcon from '../assets/ecosystem.svg';
import { Feature } from "./feature";

const features = [
  {
    imageSrc: "/images/Technology.png",
    title: 'Advancing Technology',
    description: 'IEEE fosters innovation by supporting research, publishing standards, and organizing technical conferences, driving technological solutions for societal challenges.',
    width: 100,
    height: 100,
  },
  {
    imageSrc: "/images/Empowerment.png",
    title: 'Empowering Students',
    description: 'IEEE Student Chapters provide resources, mentorship, and hands-on opportunities, enabling students to develop skills, network, and lead impactful projects.',
    width: 100,
    height: 75,
  },
  {
    imageSrc: "/images/Community.png",
    title: 'Community Outreach',
    description: 'Through international conferences and seminars, student chapters address local and global issues, promoting sustainable development and societal well-being.',
    width: 100,
    height: 100,
  }
];


export const Features = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title text-white">Making an impact on society</h2>
          <p className="section-description mt-5 text-white text-opacity-30">
            Empowering students, advancing technology, and transforming communities for a better tomorrow.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({imageSrc, title, description, height, width}) => (
            <Feature imageSrc={imageSrc} title={title} description={description} height={height} width={width} key={title} />
          ))}
        </div>
      </div>
    </section>
  );
};
