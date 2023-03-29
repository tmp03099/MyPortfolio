import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link as LinkScroll } from 'react-scroll';
import logoImg from '../img/0001.png';

function NavBar(){
    return(
        <>
            <Navbar sticky='top' expand={'md'} className="nav d-flex align-item-center" >
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={logoImg} className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Nav className="navText justify-content-end flex-grow-1 pe-3">
                            <LinkScroll className="fs-5 mx-4 fw-bold .text-reset text-decoration-none text-warning " activeClass="active" smooth spy to="home" duration={100}>Home</LinkScroll>
                            <LinkScroll className="fs-5 mx-4 fw-bold .text-reset text-decoration-none text-warning" smooth spy to="about" duration={100}>About</LinkScroll>
                            <LinkScroll className="fs-5 mx-4 fw-bold .text-reset text-decoration-none text-warning" smooth spy to="projects" duration={100}>Work</LinkScroll>
                            <Nav.Link className="fs-5 mx-4 fw-bold .text-reset text-decoration-none text-warning " href="https://docs.google.com/document/d/e/2PACX-1vS_GmGWxfwTtaWRePRdwUNTErFMZ5T2t_ajXwj63sVPjcfY9EvoMG344MRMR2ELnQ/pub">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        
        </>
    )
}

export default NavBar;