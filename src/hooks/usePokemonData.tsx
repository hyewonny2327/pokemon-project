"use clinet";
import { getRandomPokemonInfo } from "@services/pokemonServices";
import { useEffect, useState } from "react";

export function usePokemonData() {
  const [pokemon, setPokemon] = useState<{
    image: string;
    name: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      const data = await getRandomPokemonInfo();
      setPokemon(data);
      console.log(data);
    } catch (error) {
      console.log("포켓몬 불러오기 실패", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
  return { pokemon, isLoading, refetch: fetchPokemon };
}
