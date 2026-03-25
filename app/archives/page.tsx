"use client"

import Link from "next/link"
import { useState } from "react"

export default function ArchivesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const archives = [
    { year: "2024", title: "YENG Collection", category: "Editorial", date: "Dec 2024" },
    { year: "2024", title: "AURORA Series", category: "Fashion", date: "Nov 2024" },
    { year: "2024", title: "NOIR Campaign", category: "Commercial", date: "Oct 2024" },
    { year: "2024", title: "Summer Essence", category: "Editorial", date: "Aug 2024" },
    { year: "2024", title: "Urban Minimalism", category: "Fashion", date: "Jul 2024" },
    { year: "2023", title: "Winter Tales", category: "Editorial", date: "Dec 2023" },
    { year: "2023", title: "Monochrome Dreams", category: "Fashion", date: "Sep 2023" },
    { year: "2023", title: "Spring Awakening", category: "Commercial", date: "Apr 2023" },
    { year: "2023", title: "Ethereal Moments", category: "Editorial", date: "Feb 2023" },
    { year: "2022", title: "Timeless Elegance", category: "Fashion", date: "Nov 2022" },
  ]

  const groupedArchives = archives.reduce(
    (acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = []
      }
      acc[item.year].push(item)
      return acc
    },
    {} as Record<string, typeof archives>,
  )

  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between p-2 bg-black/80 backdrop-blur-sm">
        <div>
          <h1 className="font-serif text-sm tracking-wider">DEVA</h1>
          <p className="text-xs text-zinc-500 mt-1">Rome, Italy</p>
        </div>
   
      </header>

      {/* Main Content */}
      <div className="pt-32 pb-24 px-8 max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl mb-16 tracking-wider">ARCHIVES</h2>

        {/* Archives List */}
        <div className="space-y-16">
          {Object.entries(groupedArchives).map(([year, items]) => (
            <div key={year}>
              <h3 className="text-xs text-zinc-500 tracking-wider mb-8 border-b border-zinc-800 pb-2">{year}</h3>
              <div className="space-y-6">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex items-baseline justify-between gap-4 py-3 border-b border-zinc-900 transition-colors group-hover:border-zinc-700">
                      <div className="flex items-baseline gap-6">
                        <span className="font-serif text-2xl md:text-3xl tracking-wide transition-colors group-hover:text-zinc-400">
                          {item.title}
                        </span>
                        <span className="text-xs text-zinc-600 tracking-wider hidden md:inline">{item.category}</span>
                      </div>
                      <span className="text-xs text-zinc-600 tracking-wider whitespace-nowrap">{item.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
        <nav className="fixed bottom-8 left-2 z-50 flex items-center gap-6 text-xs tracking-wider">
          <a href="/" className="hover:text-zinc-400 transition-colors">
            [ HOME ]
          </a>
          <a href="/about" className="text-xs tracking-wider hover:text-zinc-400 transition-colors">
            [ SOBRE ]
          </a>
          <a href="/archives" className="hover:text-zinc-400 transition-colors">
            [ ARQUIVO ]
          </a>
        </nav>
    </main>
  )
}
