"use client";

import { useAuth } from "@clerk/nextjs";

import ExplorePage from "@/components/ExplorePage";
import UnExplore from "@/components/UnExplore";

const Explore = () => {
   const { isSignedIn } = useAuth();

   return (
      <>
         <div className="">
            {isSignedIn ? (
               <>
                  <ExplorePage />
               </>
            ) : (
               <div>
                  <UnExplore />
               </div>
            )}
         </div>
      </>
   );
};

export default Explore;
