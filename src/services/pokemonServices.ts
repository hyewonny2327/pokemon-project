import { getRandomIndex } from "@utils/getRandomIndex";

export async function getRandomPokemonInfo() {
  const pokemonIndex = getRandomIndex();
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
  );
  const pokemonData = await pokemonResponse.json();
  const { sprites, species } = pokemonData;

  const image = sprites.front_default;

  const speciesResponse = await fetch(species.url);
  const speciesData = await speciesResponse.json();
  const koreanName = speciesData.names.find(
    (item: { name: string; language: { name: string; url: string } }) =>
      item.language.name === "ko"
  );
  const name = koreanName ? koreanName.name : speciesData.name;

  return { image, name };
}
