"use client";
import React, { useState } from 'react'
import InnovareLogo from "@/assets/InnovareLogo.png";
import Image from 'next/image';
import Link from 'next/link';
import { ShimmerButtonDemo3 } from '@/components/headerbtn';
import { twMerge } from 'tailwind-merge';
import { ShimmerButtonDemo4 } from '@/components/mobilemenubtn';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  {label: "Home", href: "/"},
  {label: "About", href: "/about"},
  {label: "Team", href: "/team"},
  {label: "Events", href: "/events"},
];

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
  <section className='py-4 lg:py-8 fixed w-full top-0 z-[100]'>
    <div className='container max-w-5xl'>
      <div className='border border-white/15 rounded-[27px] py-2 md:rounded-xl lg:rounded-full bg-neutral-950/70 backdrop-blur'>
      <div className='grid grid-cols-2 lg:grid-cols-3  px-4 md:pr-2 items-center '>
        <div>
          <Image src={InnovareLogo} alt="Innovare Logo" className='h-9 md:h-[40px] w-auto'/>
        </div>
        <div className='lg:flex justify-center items-center hidden'>
          <nav className='flex gap-6 font-medium'>
            {navLinks.map(link => (
              <a className="text-opacity-60 text-white hover:text-opacity-100 transition" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className='flex justify-end gap-4'>
          <svg 
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <line x1="3" y1="6" x2="21" y2="6" className={twMerge(
            "origin-left transition",
            isOpen && 'rotate-45 -translate-y-1')}></line>
          <line 
          x1="3" 
          y1="12" 
          x2="21"
          y2="12" 
          className={twMerge("transition", isOpen && "opacity-0")}
          ></line>
          <line x1="3" y1="18" x2="21" y2="18" className={twMerge(
            "origin-left transition",
            isOpen && '-rotate-45 translate-y-1')}></line>
          </svg>
          <ShimmerButtonDemo3/>
        </div>
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial = {{height: 0}}
          animate = {{height: "auto"}}
          exit = {{height: 0}}
        className=' overflow-hidden'>
          <div className='flex flex-col items-center gap-4 py-4'>
        {navLinks.map(link => (
          <a href={link.href} key={link.label} className='text-opacity-60 text-white hover:text-opacity-100 transition'>
            {link.label}
          </a>
        ))}
        <ShimmerButtonDemo4/>
        </div>
      </motion.div>
      )}
      </AnimatePresence>
      </div>
    </div>
  </section>
  <div className='pb-[86px] md:pb-[80px] lg:pb-[50px]'>
  </div>
  </>
  );
}
