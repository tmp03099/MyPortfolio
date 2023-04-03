import avatarImg from "../img/avatar.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAngular,
  faJsSquare,
  faJava,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { SiTypescript } from "react-icons/si";
import { TbApi, TbBrandTailwind, TbDatabase } from "react-icons/tb";
import Carousel from "react-bootstrap/Carousel";

function About() {
  return (
    <section id="about" className="w-screen h-auto flex flex-col items-center">
      <h2 className="text-left lg:text-5xl ">About Me</h2>
      <div className="flex flex-col lg:flex-row w-full lg:w-4/5 xl:w-3/4 items-center mt-4">
        <div className="flex flex-col w-4/5 mr-3 text-xl">
          <div>
            <p>
              Hi! My name is Phung is a junior developer and enjoying create
              creative website. I was interest about internet and coding when I
              was young. When I moved to US that have a big opportunity for me
              to pursure back to school to pursure my interest.
            </p>
            <p>
              When I work with coding, I realized it would be the perfect fit. I
              always improving my skills and learn new skills to help me become
              a better developer. I'm done college, done a training software
              engineer and excited to start a new career as a developer. My main
              focus to build accessible products with attractive and user
              friendly interface. I also recently working with React to build
              different web app and apply the backend in there.
            </p>
          </div>
        </div>
        <div className="flex m-4  justify-center">
          <img
            src={avatarImg}
            alt="avatar.img"
            className="border-opacity-75 rounded-full border-yellow-300 border-dashed w-6/12  lg:mb-6 xl:mb-0 lg:w-full  lg:h-full"
          />
        </div>
      </div>
      <div className="w-4/5 p-2">
        <Carousel className="p-5">
          <Carousel.Item>
            <div className="flex">
              <FontAwesomeIcon
                icon={faReact}
                className="text-3xl md:text-6xl text-sky-400 w-full "
              />

              <FontAwesomeIcon
                icon={faAngular}
                className="text-3xl md:text-6xl text-red-600 w-full "
              />

              <FontAwesomeIcon
                icon={faJsSquare}
                className="text-3xl md:text-6xl text-yellow-500 w-full"
              />

              <SiTypescript className="text-3xl md:text-6xl text-blue-600 w-full" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="flex">
              <TbApi className="text-4xl md:text-6xl text-rose-500 w-full" />

              <FontAwesomeIcon
                icon={faJava}
                className="text-3xl md:text-6xl text-cyan-700 w-full"
              />

              <TbBrandTailwind className="text-3xl md:text-6xl text-sky-500 w-full" />

              <FontAwesomeIcon
                icon={faBootstrap}
                className="text-3xl md:text-6xl text-violet-600  w-full"
              />

              <TbDatabase className="text-3xl md:text-6xl text-sky-700 w-full " />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
export default About;
