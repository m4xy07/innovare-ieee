import Link from "next/link";
import ShimmerButton from "./magicui/button";

export function ShimmerButtonDemo() {
  return (
    <div className="z-10 flex min-h-16 items-center justify-center">
      <Link
        href="https://www.ieee.org/membership-application/public/join.html?grade=Student"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Join today
        </span>
      </ShimmerButton>
      </Link>
    </div>
  );
}
