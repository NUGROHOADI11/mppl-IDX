import { Row, Col, Card, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; 
import "../../assets/styles/style.css"
import img1 from "../../assets/images/hero.jpg"

const Bread = () => {
    const linkTo = '/detail';
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(linkTo); 
  };
  return (
    <Container className="bread my-5" id="bread">
      <h1 className="text-center mb-5">Bread</h1>
      <Row className="justify-content-center" >
        <Col xs={12} sm={6} md={6} lg={4} xl={3} className="my-2 ">
          <Card onClick={handleClick} className="custom-card">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} xl={3} className="my-2 ">
          <Card onClick={handleClick} className="custom-card">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} xl={3} className="my-2 ">
          <Card onClick={handleClick} className="custom-card">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} xl={3} className="my-2 ">
          <Card onClick={handleClick} className="custom-card">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Bread