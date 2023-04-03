import FeaturedProject from "../components/FeaturedProject";
import Projects from "../components/Projects";

function Work() {
  return (
    <section
      className="flex flex-col w-screen h-auto items-center"
      id="projects"
    >
      <h2 className="text-left lg:text-5xl m-3">Some Things I've Built</h2>
      <FeaturedProject />
      <Projects />
    </section>
  );
}
export default Work;
