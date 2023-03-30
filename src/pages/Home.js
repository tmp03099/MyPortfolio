import Button from "react-bootstrap/Button";
import techImg from "../img/EF7C8E.jpg";

function Home() {
  return (
    <section id="home" className="w-screen h-screen py-5">
      <h5>Hi, I am </h5>
      <h1> My Phung Tieu </h1>
      <h1>Frontend Developer | Software Developer</h1>
      <span>
        I am build and desgin things for website with user friendly interface
      </span>
      <br />
      <img style={{ width: 500 }} src={techImg} alt="tech.img" />
      <br />
      <Button>About me</Button>
    </section>
  );
}
export default Home;
