import { ExpandableCardDemo } from "@/components/expandablecards";

export const FutureEvents = () => {
  return (
    <section className="py-24 bg-black  text-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title text-white">Upcoming Events</h2>
          <p className="section-description mt-5 text-white text-opacity-30 pb-10">
            Unlock opportunities, access resources, and connect with a global network to advance your career.
          </p>
        </div>
        <ExpandableCardDemo/>
      </div>
    </section>
  );
};