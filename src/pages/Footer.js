import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import SocialMedia from "../components/SocialMedia";

function Footer() {
  const CustomToggle = ({ children, eventKey }) => {
    const handleClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button className="bg-pink-300" type="button" onClick={handleClick}>
        {children}
      </button>
    );
  };
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-screen h-auto pt-5"
    >
      <div className="border-4 outline-2 bg-gray-900 shadow-2xl rounded-3xl p-12 text-white text-center w-4/5">
        <div>
          <h3 className="text-amber-300 mb-4">
            Interested in working together?
          </h3>
          <div className="flex justify-center">
            <Accordion>
              <Card>
                <Card.Header className="p-0">
                  <CustomToggle eventKey="0">
                    <div className="flex items-center">
                      <h2 className="mx-4 mb-0">STAY CONNECTED</h2>
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="text-2xl px-2"
                      />
                    </div>
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ContactForm />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <p className="my-4">
            I'm currently looking for the opportunity to join a team of
            developer. If you think I might be a good fit, please contact me via
            <br></br>
            tmp03099@gmail.com or 412-626-9130.
          </p>
        </div>
        <div className="flex items-center">
          <div className="relative w-16 h-16 bg-orange-700 border-2 rounded-full"></div>
          <div className="relative -left-9 text-xl font-bold">
            <a
              className="text-white no-underline "
              href="https://docs.google.com/document/d/e/2PACX-1vS_GmGWxfwTtaWRePRdwUNTErFMZ5T2t_ajXwj63sVPjcfY9EvoMG344MRMR2ELnQ/pub"
            >
              MY RESUME
            </a>
          </div>
        </div>
      </div>
      <SocialMedia />
      <div>© My Phung Tieu</div>
    </section>
  );
}
export default Footer;
