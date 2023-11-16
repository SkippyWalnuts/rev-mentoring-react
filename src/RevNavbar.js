import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./RevNavbar.css";


export default function RevNavbar() {
  return (
    <div className="RevNavbar">
    <Navbar collapseOnSelect expand="sm">
      <Container className="nav-container">
        <Navbar.Brand className="nav-brand" href="/#home">Reverse Mentoring</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#home" title="Homepage" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/#about" title="About Reverse Mentoring" className="nav-link">About</Nav.Link>
            <Nav.Link href="/#course" title="Reverse Mentoring Course Overview" className="nav-link">Course</Nav.Link>
            <Nav.Link href="/#Reviews" title="Reviews of Reverse Mentoring" className="nav-link">Reviews</Nav.Link>
            <Nav.Link href="mailto:becca.early@outlook.com?subject=Reverse Mentoring Query" title="Email Becca Early with Reverse Mentoring queries" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  );
}
