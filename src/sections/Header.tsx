import ArrowRight from "@/assets/arrow-right.svg";
import InnovareLogo from "@/assets/InnovareLogo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { ShimmerButtonDemo3 } from "@/components/headerbtn";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-black z-[100]">
      
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={InnovareLogo} alt="Logo" height={40} width={40} />
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg md:hidden">
              <MenuIcon className="text-white h-5 w-5 md:hidden" />
            </div>
            
            <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-opacity-60 text-white hover:text-opacity-100 transition">Home</Link>
              <Link href="/about" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</Link>
              <Link href="/team" className="text-opacity-60 text-white hover:text-opacity-100 transition">Team</Link>
              <Link href="/events" className="text-opacity-60 text-white hover:text-opacity-100 transition">Events</Link>
              <ShimmerButtonDemo3/>
              
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
