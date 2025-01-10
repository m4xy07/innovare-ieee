import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-black z-20">
      
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg md:hidden">
              <MenuIcon className="text-white h-5 w-5 md:hidden" />
            </div>
            
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">item1</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">item2</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">item3</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">item4</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">item5</a>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                CTA
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
