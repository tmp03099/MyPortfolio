import FeaturedProject from '../components/FeaturedProject';
import Projects from '../components/Projects';

function Work(){
    return (
        <section className='d-flex flex-column' id="projects">
            <h2>Some Things I've Built</h2>
            <FeaturedProject/>
            <Projects/>


        </section>
    )
}
export default Work;