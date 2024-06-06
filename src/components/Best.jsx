import { Row, Col, Card, Container } from "react-bootstrap";
import "../assets/styles/style.css";
import * as Icon from "react-bootstrap-icons"
import img1 from "../assets/images/hero.jpg"


const Best = () => {
 
  return (
    <Container className="best" id="best">
      <h1 className="text-center">Award</h1>
      <Row className="justify-content-center" >
        <Col xs={12} sm={6} md={6} lg={4} xl={3} className="my-2 ">
          <Card className="custom-card">
            <Icon.Award className="mx-auto mt-3 mb-4" width={100} height={100}/>
            <Card.Body>
              <Card.Title>Award</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} xl={3} className="my-2 ">
          <Card className="custom-card">
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
          <Card className="custom-card">
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
          <Card className="custom-card">
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
};

export default Best;
