import { useState } from "react";
import "./DetailProject.css";

function DetailProject({ project }) {
  const [hover, setHover] = useState(true);

  function mousetEnter() {
    setHover(true);
  }

  function mouseLeave() {
    setHover(false);
  }

  return (
    <section>
      <div
        className="storeImg w-full relative"
        onMouseEnter={mousetEnter}
        onMouseLeave={mouseLeave}
      >
        <img src={project.src} style={{ width: 400 }} />
        <div className="flex flex-col justify-between item-center w-full h-full transition duration-150 ease-in-out top-0 left-0 absolute">
          <div
            className={
              "hide-section flex flex-col items-center justify-center" +
              (hover ? " hover" : "")
            }
          >
            <div className="my-3 text-black text-xl font-bold">
              {project.title}
            </div>
            <div className="mb-2 text-red-500 text-lg font-medium">
              {project.programs}
            </div>
          </div>
          <div
            className={
              "hide-section flex justify-center items-end" +
              (hover ? " hover" : "")
            }
          >
            <div>
              <button className="rounded-lg hover:rounded-xl bg-lime-500 mb-5 p-2 text-lg text-white">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DetailProject;
