import Link from "next/link";
import ShimmerButton from "./magicui/button";

export function ShimmerButtonDemo2() {
  return (
    <div className="z-10 flex min-h-8 items-center justify-center">
      <Link href="#learn">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Learn more
        </span>
      </ShimmerButton>
      </Link>
    </div>
  );
}
