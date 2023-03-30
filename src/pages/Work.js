import FeaturedProject from "../components/FeaturedProject";
import Projects from "../components/Projects";
import { useState, useEffect } from "react";
import { getPokemon } from "../services/pokemon-api";
import SearchPokemon from "../components/pokemon-abilities/SearchPokemons";

function Work() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const pokemonData = async () => {
      const data = await getPokemon("pikachu");
      setPokemon(data);
      console.log(data);
    };
    pokemonData();
  }, []);

  return (
    <section
      className="flex flex-col w-screen h-screen items-center"
      id="projects"
    >
      <h2 className="text-left lg:text-5xl p-5">Some Things I've Built</h2>
      <FeaturedProject />
      <SearchPokemon pokemon={pokemon} search={setPokemon} />
      <Projects />
    </section>
  );
}
export default Work;
