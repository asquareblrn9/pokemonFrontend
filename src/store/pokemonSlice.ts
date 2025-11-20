import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPokemon, getPokemonDetail } from "../api/pokemonApi";

import type { PokemonSummary, PokemonDetail } from "../api/pokemonApi";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface PokemonState {
  list: PokemonSummary[];
  filteredList: PokemonSummary[];
  selected?: PokemonDetail;
  searchTerm: string;
  showOnlyFavorites: boolean;
  loadingList: boolean;
  loadingDetail: boolean;
  error?: string;
}

const initialState: PokemonState = {
  list: [],
  filteredList: [],
  searchTerm: "",
  showOnlyFavorites: false,
  loadingList: false,
  loadingDetail: false,
};

export const fetchPokemonList = createAsyncThunk(
  "pokemon/fetchList",
  async () => {
    return await getAllPokemon();
  }
);

export const fetchPokemonDetail = createAsyncThunk(
  "pokemon/fetchDetail",
  async (name: string) => {
    return await getPokemonDetail(name);
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setShowOnlyFavorites(state, action: PayloadAction<boolean>) {
      state.showOnlyFavorites = action.payload;
    },
    applyFilters(state, action: PayloadAction<string[] | undefined>) {
      const favorites = action.payload ?? [];
      const search = state.searchTerm.toLowerCase();

      state.filteredList = state.list.filter((pokemon) => {
        const matchesSearch = pokemon.name.toLowerCase().includes(search);
        const matchesFav = state.showOnlyFavorites
          ? favorites.includes(pokemon.name.toLowerCase())
          : true;
        return matchesSearch && matchesFav;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.loadingList = true;
        state.error = undefined;
      })
      .addCase(
        fetchPokemonList.fulfilled,
        (state, action: PayloadAction<PokemonSummary[]>) => {
          state.loadingList = false;
          state.list = action.payload;
          state.filteredList = action.payload;
        }
      )
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loadingList = false;
        state.error = action.error.message;
      })
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.loadingDetail = true;
        state.error = undefined;
      })
      .addCase(
        fetchPokemonDetail.fulfilled,
        (state, action: PayloadAction<PokemonDetail>) => {
          state.loadingDetail = false;
          state.selected = action.payload;
        }
      )
      .addCase(fetchPokemonDetail.rejected, (state, action) => {
        state.loadingDetail = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm, setShowOnlyFavorites, applyFilters } =
  pokemonSlice.actions;

export const selectPokemonState = (state: RootState) => state.pokemon;

export default pokemonSlice.reducer;
