import { useState, useEffect } from "react";
import { getFeatureProjects } from "../services/project-api";
import { useViewport } from "../hooks/CustomHook";
import FeaturedProjectMedium from "./featured-project/FeaturedProjectMedium";
import FeaturedProjectSmall from "./featured-project/FeaturedProjectSmall";

function FeaturedProject() {
  const [fProject, setFProject] = useState([]);

  const { width } = useViewport();
  const small = 620;

  useEffect(() => {
    const loadProject = () => {
      const data = getFeatureProjects();
      setFProject(data);
    };
    loadProject();
  }, []);

  return (
    <section className="flex flex-col justify-center">
      {fProject.map((item, idx) =>
        width < small ? (
          <FeaturedProjectSmall project={item} key={idx} />
        ) : (
          <FeaturedProjectMedium project={item} key={idx} />
        )
      )}
    </section>
  );
}
export default FeaturedProject;
