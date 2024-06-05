import { Navbar, Container } from 'react-bootstrap';
import '../assets/styles/style.css'
const NavigationBar2 = () => {
  return (
    <Navbar id='header2' expand="md" variant='dark' fixed='top'>
      <Container>
        <Navbar.Brand href="/">Sweet Parade</Navbar.Brand>        
      </Container>
    </Navbar>
  );
};

export default NavigationBar2;
