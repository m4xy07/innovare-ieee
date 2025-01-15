import { MorphingDialogBasicOne } from "@/components/morphing-dialog-basic";
import React from "react";

const TeamSec = () => {
  return (
    <section className="sm:py-12 md:py-24 bg-black  text-white">
      <div className="container">
        <div className="section-heading pb-10">
          <h2 className="section-title text-white">The Team</h2>
          <p className="section-description mt-5 text-white text-opacity-30">
            Meet the Minds Behind the Magic – Our Team, Your Visionaries.
          </p>
        </div>
        <div className="container flex md:flex-row gap-6 pb-6 flex-col">
          <MorphingDialogBasicOne
            dialogData={{
              title: "Dr. Swati Shirke-Deshmukh",
              imageSrc: "/images/Team/SwatiShirke.webp",
              imageAlt: "Swati Shirke-Deshmukh [Faculty co-ordinator]",
              subtitle: "Faculty co-ordinator",
              description:
                "Dr. Swati Shirke-Deshmukh is a faculty co-ordinator of the team. She is a professor in the department of Computer Engineering at PCU. She has a keen interest in the field of Machine Learning and Artificial Intelligence.",
            }}
          />

          <MorphingDialogBasicOne
            dialogData={{
              title: "Arfiya Shikalgar",
              imageSrc: "/images/Team/Member5.webp",
              imageAlt: "Arfiya Shikalgar - President",
              subtitle: "President",
              description:
                "Arfiya Shikalgar is the President of the student chapter, Innovare. She is a third year student of Computer Engineering at PCU",
            }}
          />
          <MorphingDialogBasicOne
            dialogData={{
              title: "Aditya Jadhav",
              imageSrc: "/images/Team/AdityaJ.webp",
              imageAlt: "Aditya Jadhav - Vice-President",
              subtitle: "Vice-President",
              description:
                "Aditya Jadhav is the Vice-President of the student chapter, Innovare. He is a second year student of Computer Engineering at PCU",
            }}
          />
        </div>
        <div className="container flex sm:flex-col md:flex-row gap-6 pb-6 flex-col">
          <MorphingDialogBasicOne
            dialogData={{
              title: "Jay Patil",
              imageSrc: "/images/Team/Member15.webp",
              imageAlt: "Jay Patil - Secretary",
              subtitle: "Secretary",
              description:
                "Jay Patil is the Secretary of the student chapter, Innovare. He is a second year student of Computer Engineering at PCU",
            }}
          />

          <MorphingDialogBasicOne
            dialogData={{
              title: "Suraj Rakshe",
              imageSrc: "/images/Team/Member25.webp",
              imageAlt: "Suraj Rakshe - Secretary",
              subtitle: "Secretary",
              description:
                "Suraj Rakshe is the Secretary of the student chapter, Innovare. He is a second year student of Computer Engineering at PCU",
            }}
          />
          <MorphingDialogBasicOne
            dialogData={{
              title: "Shravan Raut",
              imageSrc: "/images/Team/shravan.webp",
              imageAlt: "Shravan Raut - Treasurer",
              subtitle: "Treasurer",
              description:
                "Shravan Raut is the Treasurer of the student chapter, Innovare. He is a second year student of Computer Engineering at PCU",
            }}
          />
        </div>
        <div className="container flex sm:flex-col md:flex-row gap-6 pb-6 flex-col">
          <MorphingDialogBasicOne
            dialogData={{
              title: "Mayur Kharche",
              imageSrc: "/images/Team/Mayur.webp",
              imageAlt: "Mayur Kharche - Treasurer",
              subtitle: "Treasurer",
              description:
                "Mayur Kharche is the Treasurer of the student chapter, Innovare. He is a second year student of Computer Engineering at PCU",
            }}
          />

          <MorphingDialogBasicOne
            dialogData={{
              title: "Aman Shaikh",
              imageSrc: "/images/Team/AmanS.webp",
              imageAlt: "Aman Shaikh - Tech Lead",
              subtitle: "Head, Technical Team",
              description:
                "Aman Shaikh is the Tech Lead of the student chapter, Innovare. He is a second year student of Computer Engineering at PCU. Aman has a keen interest in IoT",
            }}
          />
          <MorphingDialogBasicOne
            dialogData={{
              title: "Hiren Patel",
              imageSrc: "/images/Team/Hiren.webp",
              imageAlt: "Hiren Patel - Tech",
              subtitle: "Vice-Head, Technical Team",
              description:
                "Hiren Patel is the Vice-Head, Technical of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />
        </div>
        <div className="container flex sm:flex-col md:flex-row gap-6 pb-6 flex-col">
          <MorphingDialogBasicOne
            dialogData={{
              title: "Dhruv Choudhary",
              imageSrc: "/images/Team/Dhruv.webp",
              imageAlt: "Dhruv Choudhary - Tech",
              subtitle: "Member, Technical Team",
              description:
                "Dhruv Choudhary is a member of the Technical team of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />

          <MorphingDialogBasicOne
            dialogData={{
              title: "Anushka Patil",
              imageSrc: "/images/Team/anushka.webp",
              imageAlt: "Anushka Patil - Promotion",
              subtitle: "Head, Promotion Team",
              description:
                "Anushka Patil is the Head, Promotion of the student chapter, Innovare. She is a student of Engineering at PCU",
            }}
          />
          <MorphingDialogBasicOne
            dialogData={{
              title: "Renesh Sharma",
              imageSrc: "/images/Team/Renesh.webp",
              imageAlt: "Renesh Sharma - Promotion",
              subtitle: "Vice-Head, Promotion Team",
              description:
                "Renesh Sharma is the Vice-Head, Promotion of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />
        </div>
        <div className="container flex sm:flex-col md:flex-row gap-6 pb-6 flex-col">
          <MorphingDialogBasicOne
            dialogData={{
              title: "Aditya Rasal",
              imageSrc: "/images/Team/Aditya.webp",
              imageAlt: "Aditya Rasal",
              subtitle: "Head, Event Management",
              description:
                "Aditya Rasal is the Head, Event Management of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />

          <MorphingDialogBasicOne
            dialogData={{
              title: "Harsh Chavan",
              imageSrc: "/images/Team/Harsh.webp",
              imageAlt: "Harsh Chavan",
              subtitle: "Vice-Head, Event Management",
              description:
                "Harsh Chavan is the Vice-Head, Event Management of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />
          <MorphingDialogBasicOne
            dialogData={{
              title: "Viraj Awate",
              imageSrc: "/images/Team/Viraj.webp",
              imageAlt: "Viraj Awate",
              subtitle: "Head, Design Team",
              description:
                "Viraj Awate is the Head, Design of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />
        </div>
        <div className="container flex sm:flex-col md:flex-row gap-6 pb-6 flex-col">
          <MorphingDialogBasicOne
            dialogData={{
              title: "Alisha Kalokhe",
              imageSrc: "/images/Team/Alisha.webp",
              imageAlt: "Alisha Kalokhe",
              subtitle: "Vice-Head, Design Team",
              description:
                "Alisha Kalokhe is the Vice-Head, Design of the student chapter, Innovare. She is a student of Engineering at PCU",
            }}
          />

          <MorphingDialogBasicOne
            dialogData={{
              title: "Mrunmayee Desai",
              imageSrc: "/images/Team/Mrunmayee.webp",
              imageAlt: "Mrunmayee Desai",
              subtitle: "Head, Finance Team",
              description:
                "Mrunmayee Desai is the Head, Finance of the student chapter, Innovare. She is a student of Engineering at PCU",
            }}
          />
          <MorphingDialogBasicOne
            dialogData={{
              title: "Sahil Sabale",
              imageSrc: "/images/Team/Member14.webp",
              imageAlt: "Sahil Sabale",
              subtitle: "Vice-Head, Finance Team",
              description:
                "Sahil Sabale is the Vice-Head, Finance of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />
        </div>
        <div className="container flex sm:flex-col md:flex-row gap-6 pb-6 flex-col">
          <MorphingDialogBasicOne
            dialogData={{
              title: "Prajwal Shirude",
              imageSrc: "/images/Team/Prajwal.webp",
              imageAlt: "Prajwal Shirude",
              subtitle: "Vice-Head, Finance Team",
              description:
                "Prajwal Shirude is the Vice-Head, Finance of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />

          <MorphingDialogBasicOne
            dialogData={{
              title: "Aneeqa Inamdar",
              imageSrc: "/images/Team/Member4.webp",
              imageAlt: "Aneeqa Inamdar",
              subtitle: "Head, Content Team",
              description:
                "Aneeqa Inamdar is the Head, Content of the student chapter, Innovare. She is a student of Engineering at PCU",
            }}
          />
          <MorphingDialogBasicOne
            dialogData={{
              title: "Sairaj Salunke",
              imageSrc: "/images/Team/Member17.webp",
              imageAlt: "Sairaj Salunke",
              subtitle: "Vice-Head, Content Team",
              description:
                "Sairaj Salunke is the Vice-Head, Content of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />
        </div>
        <div className="container flex sm:flex-col md:flex-row gap-6 pb-6 flex-col">
          <MorphingDialogBasicOne
            dialogData={{
              title: "Vishvam Ghorpade",
              imageSrc: "/images/Team/Member23.webp",
              imageAlt: "Vishvam Ghorpade",
              subtitle: "Vice-Head, Content Team",
              description:
                "Vishvam Ghorpade is the Vice-Head, Content of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />

          <MorphingDialogBasicOne
            dialogData={{
              title: "Suraj Madane",
              imageSrc: "/images/Team/SurajM.webp",
              imageAlt: "Suraj Madane",
              subtitle: "Head, People Management",
              description:
                "Suraj Madane is the Head, People Management of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />
          <MorphingDialogBasicOne
            dialogData={{
              title: "Jay Godse",
              imageSrc: "/images/Team/Member27.webp",
              imageAlt: "Jay Godse",
              subtitle: "Vice-Head, People Management",
              description:
                "Jay Godse is the Vice-Head, People Management of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />
        </div>
        <div className="container flex sm:flex-col md:flex-row gap-6 pb-6 flex-col">
          <MorphingDialogBasicOne
            dialogData={{
              title: "Swarangi Kothawade",
              imageSrc: "/images/Team/Member18.webp",
              imageAlt: "Swarangi Kothawade",
              subtitle: "Head, Technical Workshop",
              description:
                "Swarangi Kothawade is the Head, Technical Workshop of the student chapter, Innovare. She is a student of Engineering at PCU",
            }}
          />

          <MorphingDialogBasicOne
            dialogData={{
              title: "Bhumika Gurjar",
              imageSrc: "/images/Team/bhumika.webp",
              imageAlt: "Bhumika Gurjar",
              subtitle: "Member, Technical Workshop",
              description:
                "Bhumika Gurjar is a member of the Technical Workshop of the student chapter, Innovare. She is a student of Engineering at PCU",
            }}
          />
          <MorphingDialogBasicOne
            dialogData={{
              title: "Shubham Gayakwad",
              imageSrc: "/images/Team/shubham.webp",
              imageAlt: "Shubham Gayakwad",
              subtitle: "Member, Technical Workshop",
              description:
                "Shubham Gayakwad is a member of the Technical Workshop of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />
        </div>
        <div className="container flex sm:flex-col md:flex-row gap-6 pb-6 flex-col">
          <MorphingDialogBasicOne
            dialogData={{
              title: "Abhijeet Chavan",
              imageSrc: "/images/Team/Abhijeet.webp",
              imageAlt: "Abhijeet Chavan",
              subtitle: "Voluntary Coordinator",
              description:
                "Abhijeet Chavan is the Voluntary Coordinator of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />

          <MorphingDialogBasicOne
            dialogData={{
              title: "Rajkunvar Mohite",
              imageSrc: "/images/Team/Rajkunvar.webp",
              imageAlt: "Rajkunvar Mohite",
              subtitle: "Voluntary Coordinator",
              description:
                "Rajkunvar Mohite is the Voluntary Coordinator of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />
          <MorphingDialogBasicOne
            dialogData={{
              title: "Shreyas Bagrao",
              imageSrc: "/images/Team/Shreyas.webp",
              imageAlt: "Shreyas Bagrao",
              subtitle: "Voluntary Coordinator",
              description:
                "Shreyas Bagrao is the Voluntary Coordinator of the student chapter, Innovare. He is a student of Engineering at PCU",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSec;
