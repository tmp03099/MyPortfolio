import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import hotelImg from '../img/hotelProject.jpg';
import OtherProjects from '../components/OtherProjects';

function Work(){
    return (
        <section id="projects">
            <h2>Some Things I've Built</h2>
            <div className='d-flex justify-content-center'>
                <div className="project-1 row w-100">
                    <div className="pj-content col-6 d-flex .justify-content-start">
                        <div>
                            <p>Feature</p>
                            <h3>Hotel Booking</h3>
                            <div class="description">
                                description here
                            </div>
                            <ul className="tech d-flex list-unstyled ">
                                <li>Angular</li>
                                <li>Rest API</li>
                                <li>IntelliJ</li>
                                <li>TypeScript</li>
                                <li>PrimeNG</li>
                            </ul>
                            <ul className="d-flex list-unstyled">
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
                    <div className="pj-img col-6 d-flex">
                        <a>
                            <div>
                                <img className="hotel-img" src={hotelImg} alt="hotel.img"/>
                            </div>
                        </a>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
            <OtherProjects/>


        </section>
    )
}
export default Work;