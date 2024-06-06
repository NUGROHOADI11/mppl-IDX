import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/styles/style.css'
import { BorderWidth } from 'react-bootstrap-icons';
const NavigationBar = () => {
  return (
    <Navbar id='header' expand="md" variant='dark' fixed='top' >
      <Container>
        <Navbar.Brand className='text-warning fw-bold fs-3' href="/"><img src="/logo_brand.png" alt="Sweet Parade" width={50} height={50} /> Sweet Parade</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3841625084. */}
          <Nav className="me-auto fw-bold">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="#best">Award</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        <Button className='me-2 fw-bold' variant="warning" href="#login">Login</Button>
        <Button className='me-2 fw-bold' variant="outline-warning" href="#register">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
