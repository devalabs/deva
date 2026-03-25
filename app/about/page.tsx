"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between p-2">
        <Link href="/" className="hover:text-zinc-400 transition-colors">
          <h1 className="font-serif text-sm tracking-wider">DEVA</h1>
          <p className="text-xs text-zinc-500 mt-1">Porto, Portugal</p>
        </Link>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-8">
        <div className="max-w-2xl w-full space-y-16">
          {/* Title */}
          <div className="text-center">
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl tracking-wider mb-4">
              SOBRE
            </h2>
            <div className="w-12 h-[1px] bg-white mx-auto" />
          </div>

          {/* Bio */}
          <div className="space-y-8 text-center">
            <p className="text-sm md:text-base leading-relaxed text-zinc-300 tracking-wide">
              Olá meu nome é Tiago, Sou designer interdisciplinar de moda ,
              dedicado a explorar o futuro da moda: arte na moda, tecnologia
              vestível.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-zinc-300 tracking-wide">
              Meu trabalho explora a interseção entre a moda contemporânea e a
              expressão artística, criando narrativas visuais que desafiam a
              estética convencional, mantendo uma elegância atemporal.
            </p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-2">
              <h3 className="text-xs tracking-widest text-zinc-500 mb-4">
                EXPERIÊNCIA
              </h3>
              <p className="text-sm text-zinc-300">Design de moda</p>
              <p className="text-sm text-zinc-300">Fotografia Editorial</p>
              <p className="text-sm text-zinc-300">Marketing Digital</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs tracking-widest text-zinc-500 mb-4">
                CONTATO
              </h3>
              <p className="text-sm text-zinc-300">
                tiagojosevilelatexeira@outlook.pt
              </p>
              <p className="text-sm text-zinc-300">+351 91295743</p>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-8 left-2 z-50 flex items-center gap-6 text-xs tracking-wider">
        <a href="/deva" className="hover:text-zinc-400 transition-colors">
          [ HOME ]
        </a>
        <a
          href="/deva/about"
          className="text-xs tracking-wider hover:text-zinc-400 transition-colors"
        >
          [ SOBRE ]
        </a>
      </nav>
    </main>
  );
}
