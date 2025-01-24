import { ExpandableCardDemo2 } from "@/components/expandablecards2";

export const CompletedEvents = () => {
  return (
    <section className="py-8 md:py-18 bg-black  text-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title text-white">Event Reports</h2>
          <p className="section-description mt-5 text-white text-opacity-30 pb-10">
            System Update: Thats a wrap! Thank you for joining us.
          </p>
        </div>
        <ExpandableCardDemo2 />
      </div>
    </section>
  );
};
