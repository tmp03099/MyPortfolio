import {imgData} from'../data/imgData';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function OtherProjects(){

    const [state, setState] = useState(imgData)
   
    return(
        <section>
            <h2>OTHER PROJECTS</h2>
            <div className="d-flex flex-wrap justify-content-center align-item-center animated">
                {state.map((ele) =>(
                    <div>
                        <img src={ele.src} style={{width:400}}/>
                        <div>
                            <Button>Check out</Button>

                        </div>

                    </div>
                ))}
            </div>
            <div>
                
            </div>
        </section>
    )

}
export default OtherProjects;