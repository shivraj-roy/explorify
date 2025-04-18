"use client";

import * as React from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Button from "@/UI/Button";
import { HiUserAdd } from "react-icons/hi";
import Link from "next/link";
import { RiUser4Line } from "react-icons/ri";
import { SiFusionauth } from "react-icons/si";
import { FaCheck } from "react-icons/fa";
import Box from "@/UI/Box";

export default function SignUpForm() {
   const { isLoaded, signUp, setActive } = useSignUp();
   const [emailAddress, setEmailAddress] = React.useState("");
   const [password, setPassword] = React.useState("");
   const [passwordError, setPasswordError] = React.useState(""); // State for password validation error
   const [verifying, setVerifying] = React.useState(false);
   const [code, setCode] = React.useState("");
   const [codeError, setCodeError] = React.useState(""); // State for code validation error
   const router = useRouter();

   const validatePassword = (password: string) => {
      if (password.length < 8) {
         return "Password must be at least 8 characters long.";
      }
      if (!/[A-Z]/.test(password)) {
         return "Password must contain at least one uppercase letter.";
      }
      if (!/[a-z]/.test(password)) {
         return "Password must contain at least one lowercase letter.";
      }
      if (!/[0-9]/.test(password)) {
         return "Password must contain at least one number.";
      }
      if (!/[!@#$%^&*]/.test(password)) {
         return "Password must contain at least one special character (!@#$%^&*).";
      }
      return "";
   };

   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
      const error = validatePassword(newPassword);
      setPasswordError(error);
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!isLoaded) return;

      const error = validatePassword(password);
      if (error) {
         setPasswordError(error);
         return;
      }

      try {
         await signUp.create({
            emailAddress,
            password,
         });

         await signUp.prepareEmailAddressVerification({
            strategy: "email_code",
         });

         setVerifying(true);
      } catch (err) {
         console.error(JSON.stringify(err, null, 2));
      }
   };

   const handleVerify = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!isLoaded) return;

      try {
         const signUpAttempt = await signUp.attemptEmailAddressVerification({
            code,
         });

         if (signUpAttempt.status === "complete") {
            await setActive({ session: signUpAttempt.createdSessionId });
            router.push("/");
         } else {
            console.error(JSON.stringify(signUpAttempt, null, 2));
         }
      } catch (err) {
         setCodeError("Please enter the correct verification code."); // Set error message
         console.error("Error:", JSON.stringify(err, null, 2));
      }
   };

   if (verifying) {
      return (
         <Box>
            <h1 className="text-xl font-bold mb-6 text-center capitalize flex flex-col items-center justify-center">
               <SiFusionauth className="text-highlight text-4xl" />
               Verify your email
            </h1>
            <form onSubmit={handleVerify} className="space-y-4">
               <label id="code" className="block text-md font-medium">
                  Enter your verification code
               </label>
               <input
                  value={code}
                  id="code"
                  name="code"
                  placeholder="magic code"
                  onChange={(e) => setCode(e.target.value)}
                  className="input-focus"
               />
               {codeError && (
                  <p className="text-red-500 text-sm mt-1">{codeError}</p>
               )}
               <p className="text-[12px] font-mono text-highlight/75">
                  Check your mail for the magic code.
               </p>
               <Button
                  text="Verify"
                  btnClass="btn-primary"
                  btnType="submit"
                  icon={<FaCheck />}
               />
            </form>
         </Box>
      );
   }

   return (
      <Box>
         <h1 className="text-xl font-bold mb-6 text-center capitalize flex flex-col items-center justify-center">
            <RiUser4Line className="text-highlight text-4xl" />
            Create your account
         </h1>
         <form onSubmit={handleSubmit} className="space-y-4">
            <div>
               <input
                  id="email"
                  type="email"
                  name="email"
                  value={emailAddress}
                  placeholder="email"
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="input-focus"
               />
            </div>
            <div>
               <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  onChange={handlePasswordChange}
                  className="input-focus"
               />
               <p className="text-[11px] py-2 font-mono">
                  At least 8 characters, must contain at least one uppercase
                  letter [A-Z], number [0-9], & symbol [!@#$%^&*].
               </p>
               {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
               )}
            </div>

            {/* CAPTCHA Widget */}
            <div id="clerk-captcha"></div>

            <div>
               <Button
                  btnType="submit"
                  btnClass="btn-primary"
                  icon={<HiUserAdd />}
                  text="Confirm"
               />
            </div>
         </form>

         <p className="text-center text-sm text-light-2 mt-4">
            Already have an account?{" "}
            <Link
               href="/sign-in"
               className="text-highlight/85 hover:underline hover:text-highlight"
            >
               Sign in
            </Link>
         </p>
      </Box>
   );
}
