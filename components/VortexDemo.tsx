"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import { SignInButton } from "@clerk/nextjs";
import { FlipWords } from "./ui/flip-words";
export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[100vh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="flex justify-center text-pretty sm:text-3xl md:text-4xl font-semibold text-pink-500">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-pink-400">
            Start tracking with Budget Tracker...
          </span>
        </h2>
        <h1 className="mt-12 font-extrabold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-pink-400">
            Sign in and never go{" "}
            <FlipWords words={["broke", "bankrupt", "destitute"]} /> again
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="mt-10 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-extrabold rounded-lg md:text-4xl lg:text-5xl px-5 py-2.5 text-center me-2 mb-2">
            <SignInButton />
          </button>
        </div>
      </Vortex>
    </div>
  );
}
