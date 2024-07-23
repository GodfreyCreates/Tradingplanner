import { Button } from "@/components/ui/button";
import GradientCircle from "@/components/ui/GradientCircle";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/bg.avif)" }}>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
</div>

      <div className=""></div>
      <div className="bg-gradient-to-b from-transparent via-transparent to-black flex items-center justify-center">
        <GradientCircle
          size="h-52 w-52"
          position="top-0"
          gradientFrom="from-violet-950"
          gradientTo="to-violet-400"
          opacity="66"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center h-screen text-white">
        <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-16">
          <button className="bg-slate-800 mb-4 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Godfrey&apos;s Trading Plan</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <h1 className="font-bold text-4xl text-center sm:text-4xl md:text-7xl lg:text-8xl">
            Plan the <span className="">trade</span>
            <br />
            Trade the <span className="animated-gradient-text">plan</span>
          </h1>

          <p className="mt-2 text-md sm:text-lg md:text-xl lg:text-2xl">
            You fail to plan, your planning to lose!
          </p>
          <Button className="mt-4 px-20 py-6 border-t-2 border-indigo-500 rounded-xl animated-gradient">Get Started</Button>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-4 gap-2"></div>
        </div>
      </div>
    </section>
  );
};
