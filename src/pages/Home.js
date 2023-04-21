import techImg from "../img/EF7C8E.jpg";
import { Link as LinkScroll } from "react-scroll";
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
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="hoverEffect flex mt-2 md:gap-3 justify-center">
          <span className="fontCoiny text-md md:text-4xl lg:text-5xl">My</span>
          <span className="fontCoiny text-md md:text-4xl lg:text-5xl">
            Phung
          </span>
          <span className="fontCoiny text-md md:text-4xl lg:text-5xl">
            Tieu
          </span>
        </h1>
        <h1 className="fontCoiny mb-3 md:my-3 text-xl md:text-4xl lg:text-5xl text-center">
          Frontend Developer | Software Developer
        </h1>
        <TextAnimation />
        <div className="flex justify-center m-4">
          <img style={{ width: 500 }} src={techImg} alt="tech.img" />
        </div>
        <div className="flex flex-column justify-center items-center w-3/4">
          <p className="fontSyne text-md lg:text-2xl text-center">
            "{quote.quote}"
          </p>
          <button className="mt-5 text-lg fontSourceCode ring-2 ring-emerald-400 p-2 px-3 rounded-2xl">
            <LinkScroll
              activeClass="active"
              smooth
              spy
              to="about"
              duration={100}
            >
              About me
            </LinkScroll>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Home;
