import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getFavorites, addFavorite, removeFavorite } from "../api/pokemonApi";
import type { RootState } from "./store";

interface FavoritesState {
  items: string[]; // list of names
  loading: boolean;
  error?: string;
}

const initialState: FavoritesState = {
  items: [],
  loading: false,
};

export const fetchFavorites = createAsyncThunk("favorites/fetch", async () => {
  return await getFavorites();
});

export const toggleFavorite = createAsyncThunk(
  "favorites/toggle",
  async (name: string, { getState }) => {
    const state = getState() as RootState;
    const isFavorite = state.favorites.items.includes(name.toLowerCase());
    if (isFavorite) {
      return await removeFavorite(name);
    }
    return await addFavorite(name);
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchFavorites.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(toggleFavorite.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        toggleFavorite.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectFavorites = (state: RootState) => state.favorites.items;

export default favoritesSlice.reducer;
