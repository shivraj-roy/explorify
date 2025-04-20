"use client";

// import * as React from "react";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FaSignInAlt } from "react-icons/fa";
import { BsEmojiSmileFill, BsEmojiSunglassesFill } from "react-icons/bs";
import Link from "next/link";

import Button from "@/UI/Button";
import Box from "@/UI/Box";

export default function SignInForm() {
   const { isLoaded, signIn, setActive } = useSignIn();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const router = useRouter();

   const handleShowPassword = () => {
      setShowPassword((prev) => !prev);
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!isLoaded) return;

      try {
         const signInAttempt = await signIn.create({
            identifier: email,
            password,
         });

         if (signInAttempt.status === "complete") {
            await setActive({ session: signInAttempt.createdSessionId });
            router.push("/");
         } else {
            setPasswordError("Please enter the correct password.");
         }
      } catch (err) {
         setPasswordError("Please enter the correct password.");
         console.error(JSON.stringify(err, null, 2));
      }
   };

   return (
      <Box>
         <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
            <div>
               <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  placeholder="email"
                  className="input-focus"
               />
            </div>
            <div className="relative">
               <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="password"
                  className="input-focus"
               />
               {showPassword ? (
                  <BsEmojiSmileFill
                     onClick={handleShowPassword}
                     className="absolute top-1/2 right-3 transform -translate-y-1/2 text-highlight text-xl mt-1 cursor-pointer"
                  />
               ) : (
                  <BsEmojiSunglassesFill
                     onClick={handleShowPassword}
                     className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl mt-1 cursor-pointer"
                  />
               )}
            </div>
            {passwordError && (
               <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
            <Button
               btnType="submit"
               btnClass="btn-primary"
               icon={<FaSignInAlt />}
               text="Sign In"
            />
         </form>

         <p className="text-center text-sm text-light-2 mt-4">
            Don&apos;t have an account?{" "}
            <Link
               href="/sign-up"
               className="text-highlight/85 hover:underline hover:text-highlight"
            >
               Sign up
            </Link>
         </p>
      </Box>
   );
}
