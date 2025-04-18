"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi";
import { usePathname } from "next/navigation";

const NavBar = () => {
   const pathname = usePathname();

   return (
      <>
         <nav className="flex items-center justify-center fixed bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex justify-center items-center w-[375] md:w-[500px] p-4 gap-20 h-16 rounded-3xl bg-neutral-600/30 backdrop-blur-xl border-fade/30">
               {/* Home and Explore links with active state */}
               <Link href="/" className="nav-hover">
                  <h1
                     className={`text-xl ${
                        pathname === "/" ? "text-highlight" : ""
                     }`}
                  >
                     Home
                  </h1>
               </Link>
               <Link href="/explore" className="nav-hover">
                  <h1
                     className={`text-xl ${
                        pathname === "/explore" ? "text-highlight" : ""
                     }`}
                  >
                     Explore
                  </h1>
               </Link>

               {/* Show sign-in button or user button based on authentication state */}
               <SignedOut>
                  <div className="w-10 h-10 items-center justify-center flex">
                     <Link href="/sign-in">
                        <HiOutlineUserCircle
                           className={`w-8 h-8 ${
                              pathname === "/sign-in" || pathname === "/sign-up"
                                 ? "text-highlight/90"
                                 : ""
                           }`}
                        />
                     </Link>
                  </div>
               </SignedOut>
               <SignedIn>
                  <div className="w-10 h-10 flex items-center justify-center">
                     <UserButton />
                  </div>
               </SignedIn>
            </div>
         </nav>
      </>
   );
};

export default NavBar;
