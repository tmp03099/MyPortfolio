import Button from "react-bootstrap/Button";
import techImg from "../img/EF7C8E.jpg";

function Home({ quote }) {
  return (
    <section
      id="home"
      className="w-screen h-screen py-5 flex flex-col items-center"
    >
      <h5 className="text-sm md:text-xl">Hi, I am </h5>
      <h1 className="mt-2 text-sm md:text-3xl lg:text-4xl"> My Phung Tieu </h1>
      <h1 className="mb-3 text-sm md:text-3xl lg:text-4xl">
        Frontend Developer | Software Developer
      </h1>
      <div className="fontVT text-center text-lg md:text-xl lg:text-3xl">
        I am build and desgin things for website with user friendly interface
      </div>
      <br />
      <img
        style={{ width: 500 }}
        src={techImg}
        alt="tech.img"
        className="m-5"
      />
      <br />
      <p className="fontSyne w-3/4 text-md lg:text-2xl text-center">
        "{quote.quote}"
      </p>
      <button className="mt-5 text-lg fontSourceCode ring-2 ring-emerald-400 p-2 px-3 rounded-2xl">
        About me
      </button>
    </section>
  );
}
export default Home;
