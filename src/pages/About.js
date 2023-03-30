import avatarImg from "../img/avatar.gif";
function About() {
  return (
    <section
      id="about"
      className="w-screen h-screen flex flex-col items-center"
    >
      <h2 className="text-left lg:text-5xl ">About Me</h2>
      <div className="flex flex-col lg:flex-row w-full lg:w-4/5 xl:w-3/4 items-center mt-4">
        <div className="flex flex-col w-4/5 mr-3 text-xl">
          <div>
            <p>
              Hi! My name is Phung is a junior developer and enjoying create
              creative website. I was interest about internet and coding when I
              was young. When I moved to US that have a big opportunity for me
              to pursure back to school to pursure my interest.
            </p>
            <p>
              When I work with coding, I realized it would be the perfect fit. I
              always improving my skills and learn new skills to help me become
              a better developer. I'm done college, done a training software
              engineer and excited to start a new career as a developer. My main
              focus to build accessible products with attractive and user
              friendly interface. I also recently working with React to build
              different web app and apply the backend in there.
            </p>
            <p> Here are a few technologies I've been working with recently </p>
          </div>
          <div className="flex justify-center">
            <ul>
              <li> JavaSCript </li>
              <li> React </li>
              <li> Angular </li>
              <li> HTML5 </li>
            </ul>

            <ul>
              <li> CSS3 </li>
              <li> Bootstraps </li>
              <li> Java </li>
              <li> Node.js </li>
            </ul>
          </div>
        </div>
        <div className="flex m-4  justify-center">
          <img
            src={avatarImg}
            className="border-opacity-75 rounded-full border-yellow-300 border-dashed w-6/12 md:w-7/12  lg:mb-6 xl:mb-0 lg:w-full  lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}
export default About;
