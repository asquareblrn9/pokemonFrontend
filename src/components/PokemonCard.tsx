import React from "react";
import type { PokemonSummary } from "../api/pokemonApi";

interface Props {
  pokemon: PokemonSummary;
  isFavorite: boolean;
  onSelect: () => void;
  onToggleFavorite: () => void;
}

const PokemonCard: React.FC<Props> = ({
  pokemon,
  isFavorite,
  onSelect,
  onToggleFavorite,
}) => {
  return (
    <button
      onClick={onSelect}
      className="group relative flex items-center gap-4 w-full rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all px-4 py-3 text-left"
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-16 h-16 object-contain"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base font-medium capitalize text-gray-900">
            {pokemon.name}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {pokemon.types.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 capitalize"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className="text-2xl transition-transform hover:scale-110 flex-shrink-0"
        aria-label="Toggle favorite"
      >
        {isFavorite ? "⭐" : "☆"}
      </button>
    </button>
  );
};

export default PokemonCard;
