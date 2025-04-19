"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
   const interactiveRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      const cursor = interactiveRef.current;
      if (!cursor) return;

      const handleMouseMove = (event: MouseEvent) => {
         const { clientX: x, clientY: y } = event;

         gsap.to(cursor, {
            x,
            y,
            duration: 3.5,
            ease: "power2.out",
         });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
      };
   }, []);

   return (
      <>
         <div className="gradient-bg">
            {/* SVG Morph */}
            <svg xmlns="http://www.w3.org/2000/svg">
               <defs>
                  <filter id="goo">
                     <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="10"
                        result="blur"
                     />
                     <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                        result="goo"
                     />
                     <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
               </defs>
            </svg>
            <div className="gradient-container">
               <div className="g1" />
               <div className="g2" />
               <div className="g3" />
               <div className="g4" />
               <div className="g5" />
               <div className="interactive" ref={interactiveRef} />
            </div>
         </div>
      </>
   );
}
