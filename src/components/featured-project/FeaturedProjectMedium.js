import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function FeaturedProjectMedium({ project }) {
  return (
    <div
      className="flex project-1 py-5 m-5 justify-center 
      relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:pt-0"
    >
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="flex relative vh-80 w-1/2 lg:w-full xl:mt-5 items-center ">
        <img
          className="rounded-md bg-white/5 ring-1 ring-white/10"
          width={400}
          height={400}
          src={project.src}
          alt={project.alt}
        />
      </div>
      <div
        className="text-white text-right ml-5 max-w-md w-1/2 lg:w-full lg:mx-0 lg:flex-auto lg:py-12"
        width={200}
        height={400}
      >
        <p className="mb-1">Feature Project</p>
        <h3 className="my-4 text-xl lg:text-3xl">{project.title}</h3>
        <div className="fontIncon lg:text-lg description">
          {project.description}
        </div>
        <div className="fontIncon my-4">{project.programs}</div>
        <ul className="flex list-none text-2xl">
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
  );
}

export default FeaturedProjectMedium;
