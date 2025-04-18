"use client";

import * as React from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FaSignInAlt } from "react-icons/fa";
import Button from "@/UI/Button";
import Link from "next/link";
import Box from "@/UI/Box";

export default function SignInForm() {
   const { isLoaded, signIn, setActive } = useSignIn();
   const [email, setEmail] = React.useState("");
   const [password, setPassword] = React.useState("");
   const [passwordError, setPasswordError] = React.useState(""); // State for password error
   const router = useRouter();

   // Handle the submission of the sign-in form
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
            setPasswordError("Please enter the correct password."); // Set error message
         }
      } catch (err) {
         setPasswordError("Please enter the correct password."); // Set error message
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
            <div>
               <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  placeholder="password"
                  className="input-focus"
               />
               {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
               )}
            </div>
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
