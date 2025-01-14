"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import InnovareLogo from "@/assets/InnovareLogo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { ShimmerButtonDemo3 } from "@/components/headerbtn";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 bg-black z-[100]">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={InnovareLogo} alt="Logo" height={40} width={40} />
            <div
              className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg md:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              <MenuIcon className="text-white h-5 w-5" />
            </div>

            <nav className="hidden md:flex gap-6 items-center">
              <Link href="/" className="text-opacity-60 text-white hover:text-opacity-100 transition">Home</Link>
              <Link href="/about" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</Link>
              <Link href="/team" className="text-opacity-60 text-white hover:text-opacity-100 transition">Team</Link>
              <Link href="/events" className="text-opacity-60 text-white hover:text-opacity-100 transition">Events</Link>
              <ShimmerButtonDemo3 />
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute max-w-[375px] top-0 left-0 w-full bg-black text-white z-50 p-5 md:hidden">
          <div className="flex justify-between items-center mb-5">
            <Image src={InnovareLogo} alt="Logo" height={40} width={40} />
            <button
              className="text-white text-lg font-bold"
              onClick={toggleMenu}
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-opacity-60 text-white hover:text-opacity-100 transition" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="text-opacity-60 text-white hover:text-opacity-100 transition" onClick={toggleMenu}>About</Link>
            <Link href="/team" className="text-opacity-60 text-white hover:text-opacity-100 transition" onClick={toggleMenu}>Team</Link>
            <Link href="/events" className="text-opacity-60 text-white hover:text-opacity-100 transition" onClick={toggleMenu}>Events</Link>
            <ShimmerButtonDemo3 />
          </nav>
        </div>
      )}
    </header>
  );
};
