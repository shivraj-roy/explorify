"use client";

import { useAuth } from "@clerk/nextjs";

const Explore = () => {
   const { isSignedIn } = useAuth();

   return (
      <>
         <div className="text-highlight">
            {isSignedIn
               ? "Welcome to the Explore page!"
               : "Please sign in to view this content."}
         </div>
      </>
   );
};

export default Explore;
