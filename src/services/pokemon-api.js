import axios from "axios";

export const getPokemon = async (character) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${character}?limit=20&offset=20`
    );
    console.log(response);
    const data = response.data.abilities;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
