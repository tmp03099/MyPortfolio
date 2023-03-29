import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import hotelImg from '../img/hotelProject.jpg';

function FeaturedProject(){
    return(
        <section className='d-flex justify-content-center'>
            <div className="d-flex project-1">
                <div className="back-img position-absolute">
                    <img className="hotel-img" src={hotelImg} alt="hotel.img"/>
                </div>
                <div className="front-content position-relative">
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
        </section>
    )
}
export default FeaturedProject;