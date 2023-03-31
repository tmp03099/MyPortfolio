import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link as LinkScroll } from "react-scroll";
import logoImg from "../img/0001.png";

function NavBar() {
  return (
    <>
      <Navbar sticky="top" expand={"md"} className="nav flex item-center">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={logoImg}
              alt="logo.img"
              className="logo w-14 border-amber-300 rounded-full ml-5"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Nav className="fontSyne align-center justify-end grow pe-3">
              <LinkScroll
                className="text-xl mx-4 font-bold no-underline text-amber-300 "
                activeClass="active"
                smooth
                spy
                to="home"
                duration={100}
              >
                Home
              </LinkScroll>
              <LinkScroll
                className="text-xl mx-4 font-bold no-underline text-amber-300"
                smooth
                spy
                to="about"
                duration={100}
              >
                About
              </LinkScroll>
              <LinkScroll
                className="text-xl mx-4 font-bold no-underline text-amber-300"
                smooth
                spy
                to="projects"
                duration={100}
              >
                Work
              </LinkScroll>
              <a
                className="text-xl mx-4 font-bold no-underline text-amber-300"
                href="https://docs.google.com/document/d/e/2PACX-1vS_GmGWxfwTtaWRePRdwUNTErFMZ5T2t_ajXwj63sVPjcfY9EvoMG344MRMR2ELnQ/pub"
              >
                Resume
              </a>
            </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
