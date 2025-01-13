"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-10">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Vast Accessibility to Publications
              </span>{" "}
              Members receive access to IEEE&apos;s extensive library of technical papers, journals, and conference proceedings, which cover the latest innovations and research in engineering, technology, and applied sciences.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContent2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Global Networking
              </span>{" "}
              IEEE provides opportunities to connect with a global community of professionals. Members can attend conferences, webinars, and local chapter events, which facilitate knowledge exchange and career growth.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContent3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Member-Only Discounts
              </span>{" "}
              IEEE members enjoy reduced fees for attending IEEE-sponsored conferences, workshops, and events, providing access to valuable learning experiences and professional networking opportunities.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContent4 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Exclusive Software-Use
              </span>{" "}
              Members get access to specialized software tools and platforms, such as IEEE Xplore, which are valuable for research, design, and development in engineering and technology fields.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContent5 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Professional Recognition
              </span>{" "}
              Being an IEEE member enhances your professional reputation. The IEEE is a globally recognized organization, and membership signals a commitment to high standards in engineering and technology.
            </p>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/16819/16819902.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Extensive Publications",
    title: "Empowering Innovation Through IEEE Access.",
    src: "https://cdn.discordapp.com/attachments/1319309446199115827/1328430287784251403/A1.png?ex=6786ac9d&is=67855b1d&hm=845a6f583ab325cca44a266d325ea4f01c57a9d3c73684c3cf9e6f964fb7dd3d&",
    content: <DummyContent />,
  },
  {
    category: "Global Networking",
    title: "Engage, Learn, and Advance",
    src: "https://cdn.discordapp.com/attachments/1319309446199115827/1328430288078110781/A2.jpeg?ex=6786ac9d&is=67855b1d&hm=06900885fe236fa82441ba0720960856817973a168d846e17714633c8cd05d34&",
    content: <DummyContent2 />,
  },
  {
    category: "Member-Only Discounts",
    title: "Elevate Your Expertise",
    src: "https://cdn.discordapp.com/attachments/1319309446199115827/1328430288333701151/A3.jpeg?ex=6786ac9d&is=67855b1d&hm=9c18a8e09f4d8fa9756d6b768168dfc5f511df6b204c4a8e47e29fdb52ba120f&",
    content: <DummyContent3 />,
  },

  {
    category: "Exclusive Software-Use",
    title: "Innovate with Precision",
    src: "https://images.unsplash.com/photo-1581094651181-35942459ef62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent4 />,
  },
  {
    category: "Professional Recognition",
    title: "Build a Legacy",
    src: "https://images.unsplash.com/photo-1681505526188-b05e68c77582?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent5 />,
  }
];
