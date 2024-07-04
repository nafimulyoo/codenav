'use client';

import Link from "next/link";
import { UserAuthFormSignIn } from "@/app/(auth)/components/user-auth-form-signin";


export default function SignInPage() {
  return (
    <>
      <div className=" h-screen container absolute top-0 hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center mt-2">
              <h1 className="text-2xl font-semibold tracking-tight ">
                Sign in to your account 
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your data below to sign in to your account
              </p>
            </div>
            <UserAuthFormSignIn />
            <p className="px-8 text-center text-sm text-muted-foreground">
              {"Don't have an account? "}
              <Link
                href="/signup"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-gray-800" />
        </div>
      </div>
    </>
  );
}
