"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className=" fixed justify-center max-w-96 md:max-w-fit mx-auto inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className=" absolute top-2 right-2 hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit sm:max-h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={1000}
                  height={1000}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={1000}
                  height={1000}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Innovating ideas and technologies.",
    title: "Tech for Rural Development",
    src: "https://github.com/m4xy07/innovare-website-ieee/blob/main/e1.png",
    ctaText: "Upcoming",
    ctaLink: "https://innovare.dev/404",
    content: () => {
      return (
        <p>
          Empowering rural communities through innovative ideas and cutting-edge
          technologies. Our mission is to address the unique challenges faced by
          rural areas by developing sustainable solutions that improve
          livelihoods, enhance access to essential resources, and promote
          inclusive growth. <br /> <br /> Through technology, we aim to bridge
          the gap and bring meaningful change to rural lives.
        </p>
      );
    },
  },
  {
    description: "Helping students get a better grasp of Java",
    title: "Java Programming Workshop",
    src: "https://github.com/m4xy07/innovare-website-ieee/blob/main/e2.png",
    ctaText: "Upcoming",
    ctaLink: "https://innovare.dev/404",
    content: () => {
      return (
        <p>
          Empowering students to master Java programming through hands-on
          learning and practical exercises. This workshop is designed to build a
          strong foundation in Java, covering key concepts, best practices, and
          real-world applications. <br /> <br /> Whether you&apos;re a beginner
          or looking to deepen your knowledge, join us to enhance your
          programming skills and boost your confidence in Java development.
        </p>
      );
    },
  },

  {
    description: "Essentials of writing impactful research papers",
    title: "Research Paper Writing Session",
    src: "https://github.com/m4xy07/innovare-website-ieee/blob/main/e3.png",
    ctaText: "Upcoming",
    ctaLink: "https://innovare.dev/404",
    content: () => {
      return (
        <p>
          Master the art of crafting compelling and well-structured research
          papers in this comprehensive session. Designed for students and
          professionals, this workshop covers key aspects like topic selection,
          literature review, methodology, citation styles, and effective
          presentation. <br /> <br /> Gain insights into publishing standards
          and peer-review processes to enhance your academic and professional
          writing. Join us to elevate your research communication skills!
        </p>
      );
    },
  },
  {
    description: "Explore the latest innovations and trends ",
    title: "Technical Webinar",
    src: "https://github.com/m4xy07/innovare-website-ieee/blob/main/e4.png",
    ctaText: "Upcoming",
    ctaLink: "https://innovare.dev/404",
    content: () => {
      return (
        <p>
          Dive into the world of cutting-edge technology with our engaging tech
          webinar. Discover emerging trends, groundbreaking innovations, and
          practical applications shaping the future of industries. Whether
          you&apos;re a tech enthusiast, a student, or a professional, this
          session offers valuable insights, expert perspectives, and interactive
          discussions. <br /> <br /> Stay ahead in the tech world and gain
          inspiration for your next big idea!
        </p>
      );
    },
  },
  {
    description: "Showcase your innovation and creativity",
    title: "Project Expo",
    src: "https://github.com/m4xy07/innovare-website-ieee/blob/main/e5.png",
    ctaText: "Upcoming",
    ctaLink: "https://innovare.dev/404",
    content: () => {
      return (
        <p>
          Participate in our project competition and bring your innovative ideas
          to life! This platform offers students and professionals the chance to
          present their projects to industry experts and peers. Gain
          recognition, receive valuable feedback, and compete for exciting
          prizes.
          <br /> <br /> Whether it&apos;s technology, science, or design, this
          competition celebrates creativity and problem-solving. Join us to
          inspire, innovate, and make an impact!
        </p>
      );
    },
  },
];
