import AnimatedBtn from "@/UI/AnimatedBtn";

const UnExplore = () => {
   return (
      <div className="max-w-full overflow-hidden mt-16 font-major">
         <h1 className="text-8xl md:text-[18rem] flex flex-col md:flex-row items-center justify-center overflow-hidden cursor-default">
            <p>
               <span>WA</span>
               <span className="text-highlight">N</span>
               <span>T</span>
            </p>
            <p className="hidden md:block text-[100px]">•</p>
            <p>
               <span className="text-highlight">T</span>
               <span>O</span>
            </p>
         </h1>
         <h1 className="uppercase text-5xl md:text-[10rem] flex items-center justify-center mt-5 cursor-default">
            <span>E</span>
            <span className="text-highlight">XP</span>
            <span>LO</span>
            <span className="text-highlight">R</span>
            <span>E</span>
         </h1>
         <div className="w-full h-[2px] bg-highlight my-10" />
         <div className="flex items-center justify-center gap-10 mt-36">
            <AnimatedBtn text="Sign In" link="/sign-in" />
            <p className="text-2xl md:text-5xl">First</p>
         </div>
      </div>
   );
};
export default UnExplore;
