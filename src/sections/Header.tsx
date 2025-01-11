import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { ShimmerButtonDemo3 } from "@/components/headerbtn";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-black z-50">
      
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" height={40} width={40} />
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg md:hidden">
              <MenuIcon className="text-white h-5 w-5 md:hidden" />
            </div>
            
            <nav className="hidden md:flex gap-6 items-center">
              <Link href="/mission" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</Link>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Team</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Newsletter</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Events</a>
              <ShimmerButtonDemo3/>
              
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
