import Button from "react-bootstrap/Button";
import techImg from "../img/EF7C8E.jpg";

function Home({ quote }) {
  return (
    <section
      id="home"
      className="w-screen h-screen py-5 flex flex-col items-center"
    >
      <h5>Hi, I am </h5>
      <h1> My Phung Tieu </h1>
      <h1>Frontend Developer | Software Developer</h1>
      <span>
        I am build and desgin things for website with user friendly interface
      </span>
      <br />
      <img
        style={{ width: 500 }}
        src={techImg}
        alt="tech.img"
        className="m-5"
      />
      <br />
      <p className="w-3/4 text-md lg:text-xl text-center">"{quote.quote}"</p>
      <Button className="mt-5">About me</Button>
    </section>
  );
}
export default Home;
