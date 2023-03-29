import Button from 'react-bootstrap/Button';

function DetailProject({project}){

    return(
        <section>

            <div className="storeImg position-relative" >
                <img src={project.src} style={{width:400}}/>
                <div className='captionImg position-absolute'>

                    
                        <p>{project.title}</p>
                        <p>{project.programs}</p>
                        <div>

                        <Button>Check out</Button>
                        </div>
            
                </div>
            </div>
            
        </section>
       
    )

}
export default DetailProject;