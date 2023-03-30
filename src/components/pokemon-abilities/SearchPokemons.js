import Pokemon from "./Pokemon";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SearchPokemon({ pokemon, search }) {
  const [userInput, setInput] = useState({ character: "" });

  const handleChange = (ele) => {
    console.log(ele);

    setInput({ ...userInput, [ele.target.name]: ele.target.value });
  };

  const handleSubmit = async (ele) => {
    ele.preventDefault();
    const data = await search(userInput.character);
    setInput(data);
  };

  return (
    <>
      <Form
        onClick={handleSubmit}
        className="flex relative mt-2 rounded-md shadow-sm "
      >
        <InputGroup>
          <Form.Control
            type="text"
            className="w-56 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Quick search"
            value={userInput.character}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Search
          </button>
        </InputGroup>
      </Form>
      <Pokemon pokemon={pokemon} />
    </>
  );
}
export default SearchPokemon;
