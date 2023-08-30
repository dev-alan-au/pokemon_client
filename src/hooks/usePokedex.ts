import { useQuery } from 'react-query';

import { PokedexEntry } from '../types/Pokemon';

export const usePokedex = () => useQuery(
  "pokedexData",
  (): Promise<PokedexEntry[]> => fetch(`${import.meta.env.VITE_BACKEND_URL}/pokedex`).then(data => data.json())
);