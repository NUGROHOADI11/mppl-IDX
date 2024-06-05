import "../assets/styles/style.css"
import Footer from "../components/Footer"
import NavigationBar from "../components/NavBar2";
import { Container, Button, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo_sevenman.png";
import "../assets/styles/style.css"

function Detail() {
    return (
        <>
        <Container id="detail">
            <div>
                <NavigationBar />
            </div>
            <Row className="my-4 p-auto" >
                <Col md={5}>
                    <img src={logo} className="img-large" id="image-about" alt="about me" />
                </Col>
                <Col md={7}>
                    <div className="content">
                        <h3>Product 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia possimus excepturi esse non delectus fuga aspernatur nisi, pariatur rem amet aut numquam animi beatae, explicabo reiciendis tempora quam molestias harum aliquam, aliquid quo! Id libero facere minus quisquam commodi?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia possimus excepturi esse non delectus fuga aspernatur nisi, pariatur rem amet aut numquam animi beatae, explicabo reiciendis tempora quam molestias harum aliquam, aliquid quo! Id libero facere minus quisquam commodi?
                        </p>

                        <Button variant="primary" href="https://wa.me/6281234567890" target="_blank">Order Now</Button>{' '}
                    </div>
                </Col>
            </Row>

        </Container>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Detail