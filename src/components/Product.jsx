import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import img1 from "../assets/images/hero.jpg"

const Product = () => {
  return (  
     <section id='product'>
      <Row className="justify-content-center m-5" > 
    <Col xs={12} sm={6} md={6} lg={3} xl={2} className="my-2">
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example
          </Card.Text>
          <Button variant="primary">See Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={6} md={6} lg={3} xl={2} className="my-2">
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example
          </Card.Text>
          <Button variant="primary">See Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={6} md={6} lg={3} xl={2} className="my-2">
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example
          </Card.Text>
          <Button variant="primary">See Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={6} md={6} lg={3} xl={2} className="my-2">
 
      <Card >
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example
          </Card.Text>
          <Button variant="primary">See Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={6} md={6} lg={3} xl={2} className="my-2">
 
      <Card >
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example
          </Card.Text>
          <Button variant="primary">See Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={6} md={6} lg={3} xl={2} className="my-2">
 
      <Card >
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example
          </Card.Text>
          <Button variant="primary">See Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    <Container className="d-flex justify-content-center my-5">
      <Button variant="primary">View All</Button>{' '}
    </Container>

  </Row>
     </section>
  );
}

export default Product;