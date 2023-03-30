import DetailProject from "./detail-project/DetailProject";
import { useState, useEffect } from "react";
import { getProjects } from "../services/project-api";

function Projects() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const loadProject = () => {
      const data = getProjects();
      setProject(data);
    };
    loadProject();
  }, []);

  return (
    <section className="flex flex-col m-5">
      <h2>OTHER PROJECTS</h2>
      <div className="flex flex-wrap justify-center item-center">
        {project.map((ele, idx) => (
          <DetailProject project={ele} key={idx} />
        ))}
      </div>
    </section>
  );
}
export default Projects;
