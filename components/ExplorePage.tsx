import { FaLaughSquint } from "react-icons/fa";

const ExplorePage = () => {
   return (
      <>
         <div className="max-w-full overflow-hidden mt-16 font-major">
            <h1 className="text-7xl md:text-[14rem] flex flex-col md:flex-row items-center justify-center overflow-hidden cursor-default">
               <p>
                  <span>NO</span>
                  <span className="text-highlight">T</span>
                  <span>H</span>
                  <span className="text-highlight">IN</span>
                  <span>G</span>
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
            <h1 className="uppercase text-5xl md:text-[10rem] flex items-center justify-center mt-5 cursor-default">
               <span>HE</span>
               <span className="text-highlight">R</span>
               <span>E</span>
            </h1>
            <div className="w-full h-[2px] bg-highlight my-8" />
            <div className="flex items-center justify-center gap-10 mt-20">
               <p className="text-5xl md:text-8xl flex gap-10">
                  <FaLaughSquint className="hover:text-highlight" />
                  <FaLaughSquint className="hover:text-highlight" />
                  <FaLaughSquint className="hover:text-highlight" />
               </p>
            </div>
         </div>
      </>
   );
};
export default ExplorePage;
