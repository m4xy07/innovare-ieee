import ShimmerButton from "./magicui/button";

export function ShimmerButtonDemo3() {
  return (
    <div className="z-10 flex min-h-8 items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
          Contact
        </span>
      </ShimmerButton>
    </div>
  );
}
