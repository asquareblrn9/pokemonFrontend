import React from "react";
import { FaStar, FaBolt, FaDna } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import type { PokemonDetail } from "../api/pokemonApi";

interface Props {
  pokemon?: PokemonDetail;
  isFavorite: boolean;
}

const PokemonDetailCard: React.FC<Props> = ({ pokemon, isFavorite }) => {
  if (!pokemon) return null;

  // Type color mapping for visual variety
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      fire: "from-orange-500 to-red-500",
      water: "from-blue-500 to-cyan-500",
      grass: "from-green-500 to-emerald-500",
      electric: "from-yellow-400 to-amber-500",
      psychic: "from-pink-500 to-purple-500",
      ice: "from-cyan-400 to-blue-400",
      dragon: "from-purple-600 to-indigo-600",
      dark: "from-gray-700 to-slate-800",
      fairy: "from-pink-400 to-rose-400",
      normal: "from-gray-400 to-slate-500",
      fighting: "from-red-600 to-orange-600",
      flying: "from-indigo-400 to-sky-400",
      poison: "from-purple-500 to-violet-600",
      ground: "from-yellow-600 to-amber-700",
      rock: "from-yellow-700 to-stone-600",
      bug: "from-lime-500 to-green-600",
      ghost: "from-purple-600 to-indigo-700",
      steel: "from-gray-500 to-slate-600",
    };
    return colors[type.toLowerCase()] || "from-slate-600 to-slate-700";
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header Section with Pokemon Image and Name */}
      <div
        className="relative flex items-center gap-6 mb-6 p-6 rounded-2xl
                    bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50
                    border border-slate-700/50 backdrop-blur-sm
                    shadow-xl shadow-black/20 overflow-hidden group"
      >
        {/* Background Glow Effect */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-purple-500/5 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>

        {/* Pokemon Image Container */}
        <div className="relative z-10">
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Animated Ring */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-purple-400/20
                          animate-spin-slow blur-md"
            ></div>

            {/* Image Background */}
            <div
              className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-700 to-slate-800
                          shadow-inner"
            ></div>

            {/* Pokemon Image */}
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="relative w-24 h-24 object-contain drop-shadow-[0_0_25px_rgba(251,191,36,0.3)]
                       group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Pokemon Info */}
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h2
              className="text-3xl font-bold capitalize bg-gradient-to-r from-slate-100 to-slate-300 
                         bg-clip-text text-transparent"
            >
              {pokemon.name}
            </h2>

            {/* Favorite Badge */}
            {isFavorite && (
              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-full 
                            bg-gradient-to-r from-amber-500/20 to-yellow-500/20 
                            text-amber-300 border border-amber-500/40
                            shadow-lg shadow-amber-500/20 animate-pulse-subtle"
              >
                <FaStar className="w-3 h-3" />
                <span className="text-xs font-semibold">Favorite</span>
              </div>
            )}
          </div>

          {/* Type Badges */}
          <div className="flex flex-wrap gap-2">
            {pokemon.types.map((t) => (
              <div
                key={t}
                className={`relative px-4 py-1.5 rounded-lg overflow-hidden
                          text-sm font-medium text-white capitalize
                          shadow-lg transform hover:scale-105 transition-transform duration-200
                          cursor-default`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${getTypeColor(
                    t
                  )} opacity-90`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <span className="relative z-10 drop-shadow-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Sparkle */}
        <GiSparkles
          className="absolute top-4 right-4 w-6 h-6 text-amber-400/30 
                             animate-pulse"
        />
      </div>

      {/* Abilities Card */}
      <div
        className="p-5 rounded-xl bg-gradient-to-br from-slate-800/40 to-slate-900/40
                      border border-slate-700/50 backdrop-blur-sm
                      hover:border-amber-500/30 transition-all duration-300
                      shadow-lg hover:shadow-amber-500/10 group mb-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500
                          flex items-center justify-center shadow-lg shadow-amber-500/30
                          group-hover:scale-110 transition-transform duration-300"
          >
            <FaBolt className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-bold text-slate-100 text-sm">Abilities</h3>
        </div>

        <ul className="space-y-2">
          {pokemon.abilities.map((a) => (
            <li
              key={a}
              className="flex items-center gap-2 text-slate-300 capitalize text-sm
                                   hover:text-amber-400 transition-colors duration-200"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
              {a}
            </li>
          ))}
        </ul>
      </div>

      {/* Evolutions Card */}
      <div
        className="p-5 rounded-xl bg-gradient-to-br from-slate-800/40 to-slate-900/40
                      border border-slate-700/50 backdrop-blur-sm
                      hover:border-purple-500/30 transition-all duration-300
                      shadow-lg hover:shadow-purple-500/10 group"
      >
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500
                          flex items-center justify-center shadow-lg shadow-purple-500/30
                          group-hover:scale-110 transition-transform duration-300"
          >
            <FaDna className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-bold text-slate-100 text-sm">Evolutions</h3>
        </div>

        {pokemon.evolutions.length === 0 ? (
          <p className="text-slate-400 text-xs italic flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-slate-500"></span>
            No evolution data available
          </p>
        ) : (
          <ul className="space-y-2">
            {pokemon.evolutions.map((evo) => (
              <li
                key={evo}
                className="flex items-center gap-2 text-slate-300 capitalize text-sm
                                       hover:text-purple-400 transition-colors duration-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                {evo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailCard;
