import { useQuery } from 'react-query';

import { Pokemon } from '../types/Pokemon';

export const usePokemon = (id: string) => useQuery(
  `pokemonData-${id}`,
  (): Promise<Pokemon> => fetch(`${import.meta.env.VITE_BACKEND_URL}/pokemon/en/${id}`).then(data => data.json())
);