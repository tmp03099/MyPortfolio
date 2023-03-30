function Pokemon({ pokemon }) {
  return (
    <div>
      {pokemon.map((ele, idx) => (
        <p key={idx}>{ele.ability.name}</p>
      ))}
    </div>
  );
}
export default Pokemon;
