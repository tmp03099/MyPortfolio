import Button from 'react-bootstrap/Button';

function DetailProject({project}){

    return(
        <section>

            <div className="storeImg w-full relative" >
                <img src={project.src} style={{width:400}}/>
                <div className='captionImg flex justify-center item-center w-full h-full transition duration-150 ease-in-out top-0 left-0 absolute'>

                    
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