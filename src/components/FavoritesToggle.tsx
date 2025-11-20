import React from "react";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

interface Props {
  checked: boolean;
  onChange: (val: boolean) => void;
}

const FavoritesToggle: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <label className="group inline-flex items-center gap-3 cursor-pointer select-none">
      {/* Custom Toggle Switch */}
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />

        {/* Toggle Background */}
        <div
          className="w-14 h-7 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full 
                      peer-checked:from-amber-500 peer-checked:to-yellow-500
                      transition-all duration-300 ease-in-out
                      shadow-inner peer-checked:shadow-amber-500/20
                      border border-slate-600 peer-checked:border-amber-400"
        ></div>

        {/* Toggle Circle with Icon */}
        <div
          className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full
                      peer-checked:translate-x-7 peer-checked:bg-amber-50
                      transition-all duration-300 ease-in-out
                      shadow-lg flex items-center justify-center"
        >
          {checked ? (
            <FaStar className="w-3 h-3 text-amber-500 animate-pulse" />
          ) : (
            <FiStar className="w-3 h-3 text-slate-400" />
          )}
        </div>
      </div>

      {/* Label Text with Icon */}
      <span
        className="flex items-center gap-2 text-sm font-medium
                     text-slate-300 group-hover:text-amber-400
                     transition-colors duration-200"
      >
        {checked ? (
          <>
            <FaStar className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400">Favorites Only</span>
          </>
        ) : (
          <>
            <FiStar className="w-4 h-4" />
            <span>Show Favorites Only</span>
          </>
        )}
      </span>

      {/* Hover Glow Effect */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                    bg-gradient-to-r from-amber-500/10 to-yellow-500/10
                    blur-xl transition-opacity duration-300 -z-10"
      ></div>
    </label>
  );
};

export default FavoritesToggle;
