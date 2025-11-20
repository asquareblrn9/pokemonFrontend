import apiClient from "./client";

export interface PokemonSummary {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  image: string;
  abilities: string[];
  types: string[];
  evolutions: string[];
}

export async function getAllPokemon() {
  const res = await apiClient.get<PokemonSummary[]>("/pokemon");
  return res.data;
}

export async function getPokemonDetail(name: string) {
  const res = await apiClient.get<PokemonDetail>(`/pokemon/${name}`);
  return res.data;
}

export async function getFavorites() {
  const res = await apiClient.get<string[]>("/favorites");
  return res.data;
}

export async function addFavorite(name: string) {
  const res = await apiClient.post<string[]>(`/favorites/${name}`);
  return res.data;
}

export async function removeFavorite(name: string) {
  const res = await apiClient.delete<string[]>(`/favorites/${name}`);
  return res.data;
}
