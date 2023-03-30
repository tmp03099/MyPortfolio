import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function FeaturedProjectMedium({ project }) {
  return (
    <div className="flex project-1 my-5 justify-center">
      <div className="back-img">
        <img
          className="w-full"
          style={{ width: 400 }}
          src={project.src}
          alt="hotel.img"
        />
      </div>
      <div
        className="front-content text-white bg-lime-900"
        style={{ width: 400 }}
      >
        <p>Feature</p>

        <h3>{project.title}</h3>
        <div className="description">{project.description}</div>
        <div>{project.programs}</div>
        <ul className="flex list-none">
          <li>
            <a href={project.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href={project.extenal}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeaturedProjectMedium;
