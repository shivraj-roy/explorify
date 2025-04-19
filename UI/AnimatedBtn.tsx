import Link from "next/link";

const AnimatedBtn: React.FC<{ text: string; link: string }> = ({
   text,
   link,
}) => {
   return (
      <Link href={link}>
         <button className="before:ease relative h-16 md:h-24 inline-block px-5 overflow-hidden border border-highlight bg-highlight text-dark font-semibold shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-28 before:w-10 before:translate-x-40 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-80 cursor-pointer hover:rounded-2xl">
            <span className="relative z-10 text-2xl md:text-5xl font-mono">
               {text}
            </span>
         </button>
      </Link>
   );
};
export default AnimatedBtn;
