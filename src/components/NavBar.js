import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-scroll';
import logoImg from '../img/0001.png'

function NavBar(){
    return(
        <>
       
            <Navbar sticky='top' bg="light" expand={'md'} className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={logoImg} style={{width:50}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        {/* <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header> */}
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link activeClass="active" smooth spy to="home" href="/#home">Home</Link>
                                <Link activeClass="active" smooth spy to="about" href="/#about">About</Link>
                                <Link activeClass="active" smooth spy to="projects" href="/#projects">Work</Link>
                                <Link href="https://docs.google.com/document/d/e/2PACX-1vS_GmGWxfwTtaWRePRdwUNTErFMZ5T2t_ajXwj63sVPjcfY9EvoMG344MRMR2ELnQ/pub">Resume</Link>
                            </Nav>
                        </Offcanvas.Body>

                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        
        </>
    )
}

export default NavBar;