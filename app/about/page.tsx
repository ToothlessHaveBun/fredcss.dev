"use client";
import { Navigation } from "../components/nav";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Github, Twitter, AtSign, ArrowUpRightIcon } from "lucide-react";
import AnimatedTitleWord from "@/app/components/framer-animation/animated-title-word";
import AnimatedDivider from "@/app/components/framer-animation/animated-divider";
import AnimatedText from "@/app/components/framer-animation/animated-text";



export default function AboutPage() {
  const [isIntersecting, setIntersecting] = useState(true);
  return (
    <div className="min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center">
      <Navigation />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-zinc-100 space-y-6">
            <AnimatedTitleWord className="text-4xl font-bold">Who I am?</AnimatedTitleWord>
            <AnimatedText className="mt-4 text-zinc-400">
              Hello there! I'm Frederick Chen, a student from Chongqing, China. I'm a OI player, and I'm currently a front-end developer.
            </AnimatedText>
            <AnimatedText className="mt-4 text-zinc-400">
              In my spare time, I'll make some interesting projects. And I also develop with my friends, because I think it's fun.
            </AnimatedText>
          </div>

          <div className="flex justify-center">
            <img
              src="/avatar.webp"
              alt="Frederick Chen"
              className="rounded-lg shadow-lg h-60"
            />
          </div>
          <div className="flex justify-between gap-8 w-6 h-6 duration-200">
            <Link target="_blank" href="https://github.com/ToothlessHaveBun">
                <Github
                className={`w-6 h-6 duration-200 hover:font-medium ${
                isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
                />
            </Link>
            <Link target="_blank" href="https://x.com/FrederickAsYou">
                <Twitter
                className={`w-6 h-6 duration-200 hover:font-medium ${
                isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
                />
            </Link>
            <Link target="_blank" href="mailto:contact@ohdragonboi.cn">
                <AtSign
                className={`w-6 h-6 duration-200 hover:font-medium ${
                isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
                />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
