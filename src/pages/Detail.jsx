import { useLocation } from 'react-router-dom';
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import NavigationBar from "../components/NavBar2";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import "../assets/styles/style.css";

function Detail() {
    const location = useLocation();
    const { item } = location.state;

    return (
        <>
            <Container id="detail">
            <NavigationBar />
            <Card className="mb-3" style={{ maxHeight: '540px' }}>
            <Row className="g-0">
                <Col md={4}>
                    <Card.Img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                        <Button variant="primary" href={`https://wa.me/6281331620830?text=Halo%20Saya%20tertarik%20dengan%20produk%20${item.name}`} target="_blank">Order Now</Button>{' '}
                    </Card.Body>
                </Col>
            </Row>
        </Card> 
            <Chat />
        </Container>
            <Footer />
        </>
    );
}

export default Detail;
