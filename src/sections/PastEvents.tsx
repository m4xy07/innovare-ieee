import { LayoutGridDemo } from "@/components/layoutgrid";


export const PastEvents = () => {
  return (
    <section className="pt-10 pb-24 bg-black  text-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title text-white">Past Events</h2>
          <p className="section-description mt-5 text-white text-opacity-30 pb-10">
            Reflecting on Milestones in Technology.
          </p>
        </div>
        <LayoutGridDemo/>
      </div>
    </section>
  );
};