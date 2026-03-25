"use client";

import { useEffect, useRef, useState } from "react";

export default function WorksPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const totalMarkers = 15;

  const archiveImages = [
    {
      id: 1,
      src: "placeholder.svg?w=400&h=500&fit=crop",
      alt: "Beach portrait",
      number: "01",
      size: "medium",
    },
    {
      id: 2,
      src: "placeholder.svg?w=400&h=600&fit=crop",
      alt: "Street photography",
      number: "02",
      size: "large",
    },
    {
      id: 3,
      src: "placeholder.svg?w=450&h=300&fit=crop",
      alt: "Portrait with hands",
      number: "03",
      size: "wide",
    },
    {
      id: 4,
      src: "placeholder.svg?w=400&h=600&fit=crop",
      alt: "Artistic portrait",
      number: "04",
      size: "tall",
    },
    {
      id: 5,
      src: "placeholder.svg?w=400&h=500&fit=crop",
      alt: "Fashion shot",
      number: "05",
      size: "medium",
    },
    {
      id: 6,
      src: "placeholder.svg?w=500&h=350&fit=crop",
      alt: "Lifestyle photography",
      number: "06",
      size: "wide",
    },
    {
      id: 7,
      src: "placeholder.svg?w=400&h=500&fit=crop",
      alt: "Portrait study",
      number: "07",
      size: "medium",
    },
    {
      id: 8,
      src: "placeholder.svg?w=600&h=400&fit=crop",
      alt: "Sunglasses portrait",
      number: "08",
      size: "wide",
    },
    {
      id: 9,
      src: "placeholder.svg?w=400&h=500&fit=crop",
      alt: "Athletic portrait",
      number: "09",
      size: "medium",
    },
    {
      id: 10,
      src: "placeholder.svg?w=400&h=400&fit=crop",
      alt: "Close-up portrait",
      number: "10",
      size: "square",
    },
    {
      id: 11,
      src: "placeholder.svg?w=400&h=500&fit=crop",
      alt: "Beach scene",
      number: "11",
      size: "medium",
    },
    {
      id: 12,
      src: "placeholder.svg?w=450&h=350&fit=crop",
      alt: "Group portrait",
      number: "12",
      size: "wide",
    },
    {
      id: 13,
      src: "placeholder.svg?w=400&h=600&fit=crop",
      alt: "Artistic study",
      number: "13",
      size: "tall",
    },
    {
      id: 14,
      src: "placeholder.svg?w=400&h=400&fit=crop",
      alt: "Portrait with lighting",
      number: "14",
      size: "square",
    },
    {
      id: 15,
      src: "placeholder.svg?w=400&h=500&fit=crop",
      alt: "Street portrait",
      number: "15",
      size: "medium",
    },
  ];

  const getSizeClasses = (size) => {
    const sizes = {
      large: "h-[500px] w-[400px]",
      tall: "h-[600px] w-[300px]",
      wide: "h-[300px] w-[450px]",
      square: "h-[400px] w-[400px]",
      medium: "h-[400px] w-[300px]",
    };
    return sizes[size] || sizes.medium;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollPercentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      const newPosition = Math.round(scrollPercentage * (totalMarkers - 1));
      setCurrentPosition(newPosition);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalMarkers]);

  const handleMarkerClick = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const targetScroll = (index / (totalMarkers - 1)) * maxScroll;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  const getVerticalOffset = (index) => {
    const offsets = ["0", "80px", "40px"];
    return offsets[index % 3];
  };

  return (
    <div className="min-h-screen bg-black text-white">
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
      

      {/* Timeline Scrubber */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex items-end gap-1">
          {Array.from({ length: totalMarkers }, (_, index) => (
            <button
              key={index}
              onClick={() => handleMarkerClick(index)}
              aria-label={`Go to position ${index + 1}`}
              className={`w-1 transition-all duration-300 hover:bg-white cursor-pointer ${
                index === currentPosition
                  ? "h-8 bg-white"
                  : index < currentPosition
                    ? "h-4 bg-gray-400"
                    : "h-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div
        ref={scrollContainerRef}
        className="h-screen overflow-x-auto overflow-y-hidden scrollbar-custom"
      >
        <div className="flex items-center gap-8 h-full px-8 py-16 w-max">
          {archiveImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative flex-shrink-0 group cursor-pointer ${getSizeClasses(image.size)}`}
              style={{ marginTop: getVerticalOffset(index) }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-sm group-hover:opacity-80 transition-opacity duration-300"
              />

              <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-xs tracking-wider">
                [{image.number}]
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-sm pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #111;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}
