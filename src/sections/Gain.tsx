import { AppleCardsCarouselDemo } from "@/components/carouselapple";

export const Gain = () => {
  return (
    <section className="py-24 bg-black  text-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title text-white">Benefits</h2>
          <p className="section-description mt-5 text-white text-opacity-30">
            Unlock opportunities, access resources, and connect with a global network to advance your career.
          </p>
        </div>
        <AppleCardsCarouselDemo/>
      </div>
    </section>
  );
};
