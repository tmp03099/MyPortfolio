import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import hotelImg from '../img/hotelProject.jpg';

function FeaturedProject(){
 
    return(
        <section className='flex justify-center'>
            <div className="flex project-1">
                <div className="back-img relative left-1/4">
                    <img className="blur-sm w-full" style={{width:400}} src={hotelImg} alt="hotel.img"/>
                </div>
                <div className="front-content relative text-white right-1/4 opacity-70 bg-lime-900" style={{width:400}}>
                    <p>Feature</p>
                    
                    <h3></h3>
                    <div className="description">
                        description here
                    </div>
                    <ul className="tech flex list-none ">
                        <li>Angular</li>
                        <li>Rest API</li>
                        <li>IntelliJ</li>
                        <li>TypeScript</li>
                        <li>PrimeNG</li>
                    </ul>
                    <ul className="flex list-none">
                        <li>
                            <a href='https://github.com/tmp03099/BookingApplication'>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/tmp03099/BookingMicroservice'>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://laplace-hotel.netlify.app/home">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}
export default FeaturedProject;