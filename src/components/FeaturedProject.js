import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { getFeatureProjects } from "../services/project-api";

function FeaturedProject() {
  const [fProject, setFProject] = useState([]);

  useEffect(() => {
    const loadProject = () => {
      const data = getFeatureProjects();
      setFProject(data);
    };
    loadProject();
  }, []);

  return (
    <section className="flex flex-col justify-center">
      {fProject.map((item, idx) => (
        <div className="flex project-1 my-5" key={idx}>
          <div className="back-img relative left-1/4">
            <img
              className="blur-sm w-full"
              style={{ width: 400 }}
              src={item.src}
              alt="hotel.img"
            />
          </div>
          <div
            className="front-content relative text-white right-1/4 opacity-70 bg-lime-900"
            style={{ width: 400 }}
          >
            <p>Feature</p>

            <h3>{item.title}</h3>
            <div className="description">{item.description}</div>
            <div>{item.programs}</div>
            <ul className="flex list-none">
              <li>
                <a href={item.github}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href={item.extenal}>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
export default FeaturedProject;
