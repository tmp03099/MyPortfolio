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
    <section
      id="about"
      className="w-screen h-auto lg:min-h-screen flex flex-col items-center"
    >
      <h2 className="text-left lg:text-5xl ">About Me</h2>
      <div className="flex flex-col lg:flex-row w-full lg:w-4/5 xl:w-3/4 items-center mt-4">
        <div className="flex flex-col w-4/5 mr-3 text-lg lg:text-2xl">
          <div>
            <p>
              Hi my name is Phung, I’m a frontend developer who enjoys creating
              fun and user friendly web applications for everyone. I have always
              been interested in computers and related topics such as system
              configuration, application design and coding.
            </p>
            <p>
              When it comes to coding, I always have a high standard for my
              applications where I spend a lot of time fine tuning and testing
              to make sure that the applications are bug free and easy for
              everyone to use.
            </p>
            <p>
              To start and advance in my career as a developer, I always try to
              improve my existing skills while learning new ones. A recent
              example is after completing my college degree, I am participating
              in coding bootcamp with Per-Scholars to further improve my front
              end development skills along with learning about some of the
              latest technologies such as React, Redux, MongoDB, NodeJs. These
              skills help me become an even better frontend developer.
            </p>
          </div>
        </div>
        <div className="flex lg:mx-4 justify-center">
          <img
            src={avatarImg}
            alt="avatar.img"
            className="border-opacity-75 rounded-full border-yellow-300 border-dashed w-6/12 lg:mb-6 xl:mb-0 lg:w-full  lg:h-full"
          />
        </div>
      </div>
      <div className="w-4/5 sm:p-2 lg:p-5">
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
