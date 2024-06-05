import { Card } from "react-bootstrap";
import '../assets/styles/style.css'

const Footer = () => {
  return (
    <Card bg="dark" text="white" className="text-center" fixed-bottom id="footer">
      <Card.Header>Sweet Parade</Card.Header>
      <Card.Body>
        <Card.Title>Maniskan Hari Pahitmu</Card.Title>
        <Card.Text>
        Jadikan momen dan acara spesial Dealovers lebih berkesan dengan KEMANISAN KUE
        </Card.Text>
        <Card.Text>
          <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a> | <a href="#">Youtube</a>
        </Card.Text>

      </Card.Body>
      <Card.Footer className="text-light">© 2024 Sweet Parade | Informatika, Universitas Muhammadiyah Malang</Card.Footer>
    </Card>
  );
};

export default Footer;
