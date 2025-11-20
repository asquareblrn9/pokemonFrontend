import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  applyFilters,
  fetchPokemonList,
  selectPokemonState,
  setSearchTerm,
  setShowOnlyFavorites,
} from "../store/pokemonSlice";
import {
  fetchFavorites,
  selectFavorites,
  toggleFavorite,
} from "../store/favoriteSlice";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";
import FavoritesToggle from "./FavoritesToggle";
import { fetchPokemonDetail } from "../store/pokemonSlice";
import PokemonDetailCard from "./PokemonDetail";

const PokemonList: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemonState = useAppSelector(selectPokemonState);
  const favorites = useAppSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchPokemonList());
    dispatch(fetchFavorites());
  }, [dispatch]);

  useEffect(() => {
    dispatch(applyFilters(favorites));
  }, [
    pokemonState.searchTerm,
    pokemonState.showOnlyFavorites,
    favorites,
    dispatch,
  ]);

  const handleSearchChange = (value: string) => {
    dispatch(setSearchTerm(value));
  };

  const handleToggleFavoritesOnly = (checked: boolean) => {
    dispatch(setShowOnlyFavorites(checked));
  };

  const handleSelect = (name: string) => {
    dispatch(fetchPokemonDetail(name));
  };

  const handleToggleFavorite = (name: string) => {
    dispatch(toggleFavorite(name));
  };

  if (pokemonState.loadingList) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400 text-sm">Loading Pokémon...</div>
      </div>
    );
  }

  if (pokemonState.error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-sm">
          Failed to load Pokémon: {pokemonState.error}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-6 h-full">
            {/* List Section */}
            <div className="lg:w-2/5 flex flex-col gap-4">
              {/* Controls */}
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <SearchBar
                    value={pokemonState.searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
                <FavoritesToggle
                  checked={pokemonState.showOnlyFavorites}
                  onChange={handleToggleFavoritesOnly}
                />
              </div>

              {/* Pokemon List */}
              <div className="flex-1 overflow-y-auto space-y-2">
                {pokemonState.filteredList.length === 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-400 text-sm">
                      No Pokémon found
                    </div>
                  </div>
                ) : (
                  pokemonState.filteredList.map((p) => (
                    <PokemonCard
                      key={p.id}
                      pokemon={p}
                      isFavorite={favorites.includes(p.name.toLowerCase())}
                      onSelect={() => handleSelect(p.name)}
                      onToggleFavorite={() => handleToggleFavorite(p.name)}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Detail Section */}
            <div className="lg:flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="h-full overflow-y-auto p-8">
                {pokemonState.loadingDetail && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-gray-400 text-sm">
                      Loading details...
                    </div>
                  </div>
                )}
                {!pokemonState.selected && !pokemonState.loadingDetail && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-400">
                      <div className="text-5xl mb-4">🔍</div>
                      <p className="text-sm">
                        Select a Pokémon to view details
                      </p>
                    </div>
                  </div>
                )}
                {pokemonState.selected && (
                  <PokemonDetailCard
                    pokemon={pokemonState.selected}
                    isFavorite={favorites.includes(
                      pokemonState.selected.name.toLowerCase()
                    )}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
