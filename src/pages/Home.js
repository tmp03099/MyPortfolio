import techImg from "../img/EF7C8E.jpg";
import { Link as LinkScroll } from "react-scroll";
import FramerMotion from "../components/FramerMotion";
import TextAnimation from "../components/TextAnimation";
import { useState, useEffect } from "react";
import { getQuotes } from "../services/quotes-api";

function Home() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const quoteData = async () => {
      const data = await getQuotes();
      setQuote(data);
      console.log(data);
    };
    quoteData();
  }, []);

  return (
    <section
      id="home"
      className="w-screen h-screen py-5 flex flex-col items-center"
    >
      <h5 className="flex text-sm md:text-xl justify-center">Hi, I am </h5>
      <div className="h-full flex flex-col items-center justify-center ">
        <h1 className="hoverEffect flex mt-2 gap-3">
          <span className="fontCoiny text-sm md:text-3xl lg:text-6xl">My</span>
          <span className="fontCoiny text-sm md:text-3xl lg:text-6xl">
            Phung
          </span>
          <span className="fontCoiny text-sm md:text-3xl lg:text-6xl">
            Tieu
          </span>
        </h1>
        <FramerMotion text={"Frontend Developer | Software Developer"} />
        <TextAnimation />
      </div>
      {/* <h1 className="mb-3 text-sm md:text-3xl lg:text-4xl">
        Frontend Developer | Software Developer
      </h1> */}

      {/* <div className="fontVT text-center text-lg md:text-xl lg:text-3xl">
        Always build and desgin website with user friendly interface in mind
      </div> */}
      {/* <br /> */}
      {/* <img
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
        <LinkScroll activeClass="active" smooth spy to="about" duration={100}>
          About me
        </LinkScroll>
      </button> */}
    </section>
  );
}
export default Home;
