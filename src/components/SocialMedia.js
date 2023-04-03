import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  return (
    <section className="w-screen h-auto sticky">
      <ul>
        <li>
          <a className="text-3xl text-white" href="https://github.com/tmp03099">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            className="text-3xl text-white"
            href="https://www.instagram.com/fung.09/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            className="text-3xl text-white"
            href="https://www.linkedin.com/in/my-phung-tieu-0bba22219/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </section>
  );
}
export default SocialMedia;
