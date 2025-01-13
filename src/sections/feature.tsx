"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const Feature = ({ title, description, imageSrc, width, height, }: { title: string; description: string; imageSrc: string; width: number; height: number; }) => {
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return;
            const borderRect = border.current.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className="border-[1.5px] border-white/20 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
            <motion.div
                className="absolute inset-0 border-[1.5px] border-purple-400 rounded-xl"
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage,
                }}
                ref={border}
            ></motion.div>
            <div className="inline-flex text-black justify-center items-center rounded-lg">
                <Image src={imageSrc} alt={title} width={width} height={height} className="rounded-lg" />
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-white/70">{description}</p>
        </div>
    );
};
