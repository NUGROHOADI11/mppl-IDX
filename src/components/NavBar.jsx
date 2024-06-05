import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/styles/style.css'
const NavigationBar = () => {
  return (
    <Navbar id='header' expand="md" variant='dark' fixed='top' >
      <Container>
        <Navbar.Brand href="/">Sweet Parade</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="#best">Best Seller</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        <Button className='me-2' variant="primary" href="#login">Login</Button>
        <Button variant="outline-primary" href="#register">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
