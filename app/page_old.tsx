"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const works = [
    {
      title: "YENG",
      image: "/fashion-editorial-makeup-red-artistic-styling.jpg",
      subtitle: "[ SPRING SUMMER ]",
    },
    {
      title: "AURORA",
      image: "/high-fashion-portrait-elegant-minimal.jpg",
      subtitle: "[ FALL WINTER ]",
    },
    {
      title: "NOIR",
      image: "/black-and-white-fashion-photography-dramatic.jpg",
      subtitle: "[ COLLECTION ]",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between p-8">
        <div>
          <h1 className="font-serif text-sm tracking-wider">DEVA</h1>
          <p className="text-xs text-zinc-500 mt-1">Porto, Portugal</p>
        </div>
        <nav className="flex gap-8 text-xs tracking-wider">
          <Link
            href="/about"
            className="text-xs tracking-wider hover:text-zinc-400 transition-colors"
          >
            [ ABOUT ]
          </Link>
          <Link
            href="/archives"
            className="text-xs tracking-wider hover:text-zinc-400 transition-colors"
          >
            [ ARCHIVES ]
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-8 -mt-8">
        <div className="relative max-w-4xl w-full">
          {/* Red indicator dot */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full" />

          {/* Image Container */}
          <div className="relative aspect-[3/2] bg-zinc-900 overflow-hidden">
            <img
              src={works[currentIndex].image || "/placeholder.svg"}
              alt={works[currentIndex].title}
              className="w-full h-full object-cover"
            />

            {/* Title Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="font-serif text-7xl md:text-8xl lg:text-9xl text-white tracking-wider">
                {works[currentIndex].title}
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-center text-xs text-zinc-500 mt-6 tracking-wider">
            {works[currentIndex].subtitle}
          </p>

          {/* Navigation Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`text-xs tracking-wider transition-colors ${
                  index === currentIndex ? "text-white" : "text-zinc-600"
                }`}
              >
                [{String(index + 1).padStart(2, "0")}]
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex flex-col items-center pb-8 gap-6">
        {/* Scroll Indicator */}
        <div className="text-xs text-zinc-600 tracking-wider">
          (SCROLL DOWN)
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 text-xs tracking-wider">
          <Link href="/works" className="hover:text-zinc-400 transition-colors">
            [ WORKS ]
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-zinc-400 transition-colors"
          >
            [ PORTFOLIO ]
          </Link>
        </nav>
      </div>
    </main>
  );
}
