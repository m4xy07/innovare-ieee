"use client";

import { cn } from "@/lib/utils";
import DotPattern from "./magicui/gridpattern";

export function DotPatternDemo2() {
  return (
    <div className="absolute flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}