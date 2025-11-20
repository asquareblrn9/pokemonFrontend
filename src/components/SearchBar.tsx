import React from "react";
import { FiSearch, FiX } from "react-icons/fi";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="relative w-full md:w-80 group">
      {/* Search Icon */}
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 
                    text-slate-400 group-focus-within:text-amber-400
                    transition-colors duration-200 pointer-events-none"
      >
        <FiSearch className="w-5 h-5" />
      </div>

      {/* Input Field */}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Pokémon by name..."
        className="w-full rounded-xl 
                 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900
                 border border-slate-700 
                 pl-12 pr-12 py-3 text-sm text-slate-100
                 placeholder:text-slate-500
                 focus:outline-none focus:ring-2 focus:ring-amber-400/50 
                 focus:border-amber-400/50
                 hover:border-slate-600
                 transition-all duration-200
                 shadow-lg shadow-black/20
                 backdrop-blur-sm"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2
                   text-slate-400 hover:text-amber-400
                   transition-all duration-200
                   hover:scale-110 active:scale-95
                   focus:outline-none focus:ring-2 focus:ring-amber-400/50 
                   rounded-full p-1"
          aria-label="Clear search"
        >
          <FiX className="w-4 h-4" />
        </button>
      )}

      {/* Animated Border Glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 
                    group-focus-within:opacity-100
                    bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20
                    blur-xl transition-opacity duration-300 -z-10
                    animate-pulse"
      ></div>

      {/* Subtle Inner Glow */}
      <div
        className="absolute inset-0 rounded-xl 
                    bg-gradient-to-br from-amber-500/0 via-transparent to-purple-500/0
                    group-focus-within:from-amber-500/5 group-focus-within:to-purple-500/5
                    transition-all duration-300 pointer-events-none"
      ></div>
    </div>
  );
};

export default SearchBar;
