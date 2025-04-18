"use client";

import { useEffect, useRef } from "react";

export default function Home() {
   const interactiveRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      const interBubble = interactiveRef.current;
      if (!interBubble) return;

      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      const move = () => {
         curX += (tgX - curX) / 20;
         curY += (tgY - curY) / 20;
         interBubble.style.transform = `translate(${Math.round(
            curX
         )}px, ${Math.round(curY)}px)`;
         requestAnimationFrame(move);
      };

      const handleMouseMove = (event: MouseEvent) => {
         tgX = event.clientX;
         tgY = event.clientY;
      };

      window.addEventListener("mousemove", handleMouseMove);
      move();

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
