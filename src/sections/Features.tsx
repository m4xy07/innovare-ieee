"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { FeaturesSectionDemo } from "@/components/impact";
import EcosystemIcon from '../assets/ecosystem.svg';
import { Feature } from "./feature";

const features = [
  {
    title: 'Feature1',
    description: 'abc'
  },
  {
    title: 'Feature2',
    description: 'abc'
  },
  {
    title: 'Feature3',
    description: 'abc'
  }
]


export const Features = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title text-white">Making an impact on society</h2>
          <p className="section-description mt-5 text-white text-opacity-30">
            Text
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
