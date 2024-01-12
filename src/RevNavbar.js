import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./RevNavbar.css";


export default function RevNavbar() {
  return (
    <div className="RevNavbar">
    <Navbar collapseOnSelect expand="md" fixed="top" className="nav-navbar">
      <Container className="nav-container">
        <Navbar.Brand className="nav-brand nav-company-name nav-text" href="/#home">A Better Understanding</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#home" title="Homepage" className="nav-title nav-page nav-text">Home</Nav.Link>
            <Nav.Link href="/#about" title="About Reverse Mentoring" className="nav-link nav-page nav-text">About</Nav.Link>
            <Nav.Link href="/#reviews" title="Reverse Mentoring Reviews" className="nav-link nav-page nav-text">Reviews</Nav.Link>
            <Nav.Link href="mailto:becca.early@outlook.com?subject=A Better Understanding Query" title="Email Becca Early with A Better Understanding queries" className="nav-link nav-page nav-text">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  );
}
