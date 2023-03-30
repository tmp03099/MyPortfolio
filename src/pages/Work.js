import FeaturedProject from '../components/FeaturedProject';
import Projects from '../components/Projects';

function Work(){
    return (
        <section className='flex flex-col w-screen h-screen' id="projects">
            <h2>Some Things I've Built</h2>
            <FeaturedProject/>
            <Projects/>


        </section>
    )
}
export default Work;