import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-mono selection:bg-zinc-700 selection:text-white">
      <div className="min-h-screen flex flex-col max-w-5xl mx-auto border-x border-zinc-800 bg-zinc-950/50 shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50 sticky top-0 z-50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50 border border-green-500/50" />
            </div>
            <span className="ml-4 text-xs text-zinc-500">yusuf@portfolio:~</span>
          </div>
          <div className="text-xs text-zinc-600">zsh</div>
        </div>

        {/* Terminal Viewport */}
        <main className="flex-1 p-6 md:p-12 space-y-16">
           <Hero />
           <Experience />
           <Education />
           <Skills />
           
           <div className="pt-8 border-t border-zinc-800/50">
              <div className="flex items-center gap-2 text-green-500">
                <span>➜</span>
                <span className="text-blue-500">~</span>
                <span className="animate-pulse">_</span>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
}
