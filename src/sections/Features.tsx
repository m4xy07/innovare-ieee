"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { FeaturesSectionDemo } from "@/components/impact";
import EcosystemIcon from '../assets/ecosystem.svg';
import { Feature } from "./feature";

const features = [
  {
    title: 'Advancing Technology',
    description: 'IEEE fosters innovation by supporting research, publishing standards, and organizing technical conferences, driving technological solutions for societal challenges.'
  },
  {
    title: 'Empowering Students',
    description: 'IEEE Student Chapters provide resources, mentorship, and hands-on opportunities, enabling students to develop skills, network, and lead impactful projects.'
  },
  {
    title: 'Community Outreach',
    description: 'Through international conferences and seminars, student chapters address local and global issues, promoting sustainable development and societal well-being.'
  }
]


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
          {features.map(({title, description}) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </section>
  );
};
