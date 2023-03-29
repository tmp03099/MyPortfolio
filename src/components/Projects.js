import DetailProject from "./DetailProject";
import {imgData} from'../data/imgData';
import { useState } from 'react';

function Projects(){
    const [project, setProject] = useState(imgData);
    return(
        <section className="d-flex flex-column m-5">
            <h2>OTHER PROJECTS</h2>
            <div className="d-flex flex-wrap justify-content-center align-item-center animated">
                {project.map((ele, idx)=>(
                     <DetailProject project={ele} key={idx}/>
                ))}
            </div>
        </section>
    )
}
export default Projects