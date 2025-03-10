import Link from "next/link";
import ShimmerButton from "./magicui/button";

export function ShimmerButtonDemo4() {
  return (
    <div className="z-10 sm:inline-flex lg:hidden min-h-8 items-center justify-center">
      <Link href="/contact">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
          Contact
        </span>
      </ShimmerButton>
      </Link>
    </div>
  );
}
