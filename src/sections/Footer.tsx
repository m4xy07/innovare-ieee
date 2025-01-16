import Image from "next/image";
import logo from "@/assets/InnovareLogo.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative ">
          <Image src={logo} height={40} alt="Innovare logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="/" className="text-opacity-60 text-white hover:text-opacity-100 transition">Home</a>
          <a href="/about" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
          <a href="/team" className="text-opacity-60 text-white hover:text-opacity-100 transition">Team</a>
          <a href="/events" className="text-opacity-60 text-white hover:text-opacity-100 transition">Events</a>
          <a href="/contact" className="text-opacity-60 text-white hover:text-opacity-100 transition">Contact</a>
        </nav>
        <p className="mt-6">
          2025 Innovare, Aman Shaikh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
