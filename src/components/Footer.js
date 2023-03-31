import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

function Footer() {
  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        type="button"
        style={{ backgroundColor: "pink" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  };
  return (
    <section className="flex justify-center items-center">
      <div className="border-4 outline-2 bg-gray-900 shadow-2xl rounded-3xl p-12 text-white text-center">
        <div>
          <h3 className="text-amber-300">Interested in working together?</h3>
          <div className="flex justify-center">
            <Accordion>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="0">
                    <h2 className="mx-4">STAY CONNECTED</h2>
                    <FontAwesomeIcon icon={faPaperPlane} />
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
          <p>
            I'm currently looking for the opportunity to join a team of
            developer. If you think I might be a good fit, please contact me.
          </p>
        </div>
        <div className="flex items-center">
          <div className="relative w-16 h-16 bg-orange-700 border-2 rounded-full"></div>
          <div className="relative -left-9 text-xl font-bold">
            <button>MY RESUME</button>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
export default Footer;
