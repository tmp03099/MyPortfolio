import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./DetailProject.css";

function DetailProject({ project }) {
  const [hover, setHover] = useState(false);

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
          <div className={"hide-section flex " + (hover ? " hover" : "")}>
            <p>{project.title}</p>
            <p>{project.programs}</p>
          </div>
          <div
            className={
              "hide-section flex justify-center items-end" +
              (hover ? " hover" : "")
            }
          >
            <div>
              <Button>Check out</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DetailProject;
