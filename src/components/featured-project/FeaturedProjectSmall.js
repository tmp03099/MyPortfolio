import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function FeaturedProjectSmall({ project }) {
  return (
    <div
      className="flex flex-col p-3 m-2 justify-center 
      relative isolate overflow-hidden bg-gray-900 rounded-2xl"
    >
      <div
        className="flex bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${project.src})` }}
      >
        <div className="flex flex-col text-white bg-gray-900 opacity-75 text-center">
          <p className="mb-1">Feature Project</p>
          <h3 className="mb-4">{project.title}</h3>
          <div className="description">{project.description}</div>
          <div className="my-4">{project.programs}</div>
          <ul className="flex list-none text-xl">
            <li>
              <a href={project.github}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="mx-10">
              <a href={project.link}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectSmall;
