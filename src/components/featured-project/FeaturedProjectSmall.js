import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function FeaturedProjectSmall({ project }) {
  return (
    <div
      className="flex flex-col p-3 m-2 justify-center
      relative isolate overflow-hidden bg-gray-900 rounded-2xl w-11/12"
    >
      <div
        className="flex bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${project.src})` }}
      >
        <div className="flex flex-col text-white bg-gray-900 opacity-90 text-center">
          <p className="mb-1 text-cyan-400">Feature Project</p>
          <h3 className="mb-4">{project.title}</h3>
          <div className="fontIncon">{project.description}</div>
          <div className="fontIncon my-4 text-cyan-400 font-bold">
            {project.programs}
          </div>
          <ul className="flex list-none text-xl">
            <li>
              <a href={project.github} className="text-white">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="mx-10">
              <a href={project.link} className="text-white">
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
