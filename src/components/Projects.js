import DetailProject from "./DetailProject";
import {imgData} from'../data/imgData';
import { useState } from 'react';

function Projects(){
    const [project, setProject] = useState(imgData);
    return(
        <section className="flex flex-col m-5">
            <h2>OTHER PROJECTS</h2>
            <div className="flex flex-wrap justify-center item-center">
                {project.map((ele, idx)=>(
                     <DetailProject project={ele} key={idx}/>
                ))}
            </div>
        </section>
    )
}
export default Projects