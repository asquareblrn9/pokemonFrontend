import React from "react";
import { FaBolt } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiRedux, SiTypescript } from "react-icons/si";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 
                    text-slate-100 flex flex-col relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full 
                      blur-3xl animate-pulse"
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full 
                      blur-3xl animate-pulse delay-700"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"
        ></div>
      </div>

      {/* Header */}
      <header
        className="relative border-b border-slate-800/50 backdrop-blur-xl
                       bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80
                       px-6 py-4 shadow-lg shadow-black/20"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 
                            flex items-center justify-center shadow-lg shadow-amber-500/30
                            group-hover:scale-110 transition-transform duration-300"
              >
                <FaBolt className="w-5 h-5 text-slate-900" />
              </div>
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 
                            blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"
              ></div>
            </div>

            <h1 className="text-2xl font-bold tracking-tight">
              <span
                className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 
                             bg-clip-text text-transparent"
              >
                Pokédex
              </span>
              <span
                className="ml-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 
                             bg-clip-text text-transparent animate-pulse"
              >
                TS
              </span>
            </h1>
          </div>

          {/* Tech Stack Badges */}
          <div className="hidden md:flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg 
                          bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm
                          hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <SiReact className="w-4 h-4 text-cyan-400 group-hover:animate-spin" />
              <span className="text-xs font-medium text-slate-300">React</span>
            </div>

            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg 
                          bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm
                          hover:border-green-500/50 transition-all duration-300 group"
            >
              <SiNodedotjs
                className="w-4 h-4 text-green-400 group-hover:scale-110 
                                     transition-transform duration-300"
              />
              <span className="text-xs font-medium text-slate-300">Node</span>
            </div>

            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg 
                          bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm
                          hover:border-purple-500/50 transition-all duration-300 group"
            >
              <SiRedux
                className="w-4 h-4 text-purple-400 group-hover:rotate-12 
                                 transition-transform duration-300"
              />
              <span className="text-xs font-medium text-slate-300">Redux</span>
            </div>

            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg 
                          bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm
                          hover:border-blue-500/50 transition-all duration-300 group"
            >
              <SiTypescript
                className="w-4 h-4 text-blue-400 group-hover:scale-110 
                                      transition-transform duration-300"
              />
              <span className="text-xs font-medium text-slate-300">
                TypeScript
              </span>
            </div>
          </div>

          {/* Mobile Tech Stack */}
          <div
            className="md:hidden flex items-center gap-2 text-xs text-slate-400 
                        bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50"
          >
            <SiReact className="w-3 h-3 text-cyan-400" />
            <span>+</span>
            <SiNodedotjs className="w-3 h-3 text-green-400" />
            <span>+</span>
            <SiRedux className="w-3 h-3 text-purple-400" />
          </div>
        </div>

        {/* Header Bottom Gradient Line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px 
                      bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
        ></div>
      </header>

      {/* Main Content */}
      <main className="relative flex-1 p-6 max-w-7xl mx-auto w-full">
        <div className="animate-fadeIn">{children}</div>
      </main>

      {/* Footer Glow Effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 
                    bg-gradient-to-t from-amber-500/5 via-transparent to-transparent 
                    pointer-events-none"
      ></div>
    </div>
  );
};

export default Layout;
