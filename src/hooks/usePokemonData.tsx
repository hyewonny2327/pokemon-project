"use clinet";
import { getRandomPokemonInfo } from "@services/pokemonServices";
import { useEffect, useState } from "react";

export function usePokemonData() {
  const [pokemon, setPokemon] = useState<{
    image: string;
    name: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const data = await getRandomPokemonInfo();
        setPokemon(data);
      } catch (error) {
        console.log("포켓몬 불러오기 실패", error);
      } finally {
        setIsLoading(false);
      }
    }
  });
  return { pokemon, isLoading };
}
