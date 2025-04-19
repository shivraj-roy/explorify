"use client";

import UnExplore from "@/components/UnExplore";
import { useAuth } from "@clerk/nextjs";

const Explore = () => {
   const { isSignedIn } = useAuth();

   return (
      <>
         <div className="">
            {isSignedIn ? (
               "Welcome to the Explore page!"
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
