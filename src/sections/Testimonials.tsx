"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";
import { DotPatternDemo } from "@/components/dotpatterndemo";

const testimonials = [
  {
    text: "The Chapter has given me hands-on experience in event organization and management, which has greatly improved my management skills.",
    imageSrc: avatar1.src,
    name: "Suraj Madane",
    username: "suraj.madane@innovare.dev",
  },
  {
    text: "My membership has allowed access to a vast collection of research papers and articles that were previously inaccessible, making it so much easier stay updated with the latest advancements.",
    imageSrc: avatar2.src,
    name: "Alisha Kalokhe"
    username: "alisha.kalokhe@innovare.dev",
  },
  {
    text: "Research and browsing on any topic have become vastly more convenient thanks to the extensive resources available through IEEE.",
    imageSrc: avatar3.src,
    name: "Anushka Patil",
    username: "anushka.patil@innovaere.dev",
  },
  {
    text: "Being part of the Chapter has allowed me to network with industry leaders, collaborate with academia, and connect with top researchers, opening doors for potential mentorship."
    imageSrc: avatar4.src,
    name: "Hiren Patel",
    username: "hiren.patel@innovare.dev",
  },
  {
    text: "Attending in-house workshops and projects has deepened my understanding of emerging technologies, and helping organize them further boosts my technical knowledge."
    imageSrc: avatar5.src,
    name: "Bhumika Gurjar",
    username: "bhumika.gurjar@innovare.dev",
  },
  {
    text: "Chapter activities have helped me build valuable relationships with like-minded peers, fostering a culture of collaboration that has led to fruitful partnerships.",
    imageSrc: avatar6.src,
    name: "Prajwal Shirude",
    username: "prajwal.shirude@innovare.dev",
  },
  {
    text: "Through Chapter-led outreach and events, I've developed a stronger sense of purpose by contributing to the wider community and supporting educational initiatives.",
    imageSrc: avatar7.src,
    name: "Shravan Raut",
    username: "shravan.raut@innovare.dev",
  },
  {
    text: "This has been an excellent platform for developing workplace-relevant soft skills, from coordination to public speaking and backend support.",
    imageSrc: avatar8.src,
    name: "Rajkunvar Mohite",
    username: "rajkunvar.mohite@innovare.dev",
  },
  {
    text: "Quantitative research work has never been easier due the Chapter and organisation's vast reach.",
    imageSrc: avatar9.src,
    name: "Aneeqa Inamdar",
    username: "anneqa.inamdar@innovare.dev",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, outerIndex) => (
  <React.Fragment key={`outer-${outerIndex}`}>
    {props.testimonials.map(({ text, imageSrc, name, username }, innerIndex) => (
      <div className="card" key={`inner-${outerIndex}-${innerIndex}`}>
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image
            src={imageSrc}
            alt={name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">
              {name}
            </div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </React.Fragment>
))}

    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-black pb-10">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag text-white">Testimonials</div>
          </div>
          <h2 className="section-title mt-5 text-white">What our members say</h2>
          <p className="section-description mt-5 text-white text-opacity-30 pb-10">
            Hear from our members: Inspiring journeys, impactful experiences, and a community that drives innovation.
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
        <DotPatternDemo />
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
