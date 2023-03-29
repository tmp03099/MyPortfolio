import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return (
        <>
            <ul>
                <li><a href=""><FontAwesomeIcon icon={faGithub}/></a></li>
                <li><a href=""><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a href=""><FontAwesomeIcon icon={faLinkedin}/></a></li>

            </ul>
        </>
    )
}
export default Footer;