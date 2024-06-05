import {  Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo_sevenman.png";
import "../assets/styles/style.css"

const About = () => {
  return (
    <>
    <section className="about" id="about">
      <h1 className="text-center">About Us</h1>
      <Row className="my-4">
        <Col md={3}>
          <img src={logo} className="img-thumbnail" id="image-about" alt="about me" />
        </Col>
        <Col md={8}>
          <div className="content">
            <h3>Profile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia possimus excepturi esse non delectus fuga aspernatur nisi, pariatur rem amet aut numquam animi beatae, explicabo reiciendis tempora quam molestias harum aliquam, aliquid quo! Id libero facere minus quisquam commodi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia possimus excepturi esse non delectus fuga aspernatur nisi, pariatur rem amet aut numquam animi beatae, explicabo reiciendis tempora quam molestias harum aliquam, aliquid quo! Id libero facere minus quisquam commodi?
            </p>
          </div>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={8}>
          <div className="content">
            <h3>Visi</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia possimus excepturi esse non delectus fuga aspernatur nisi, pariatur rem amet aut numquam animi beatae, explicabo reiciendis tempora quam molestias harum aliquam, aliquid quo! Id libero facere minus quisquam commodi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia possimus excepturi esse non delectus fuga aspernatur nisi, pariatur rem amet aut numquam animi beatae, explicabo reiciendis tempora quam molestias harum aliquam, aliquid quo! Id libero facere minus quisquam commodi?
            </p>
          </div>
        </Col>
        <Col md={3}>
          <img src={logo} className="img-thumbnail" id="image-about" alt="about me" />
        </Col>
      </Row>
      <Row className="my-4 mb-5">
        <Col md={3}>
          <img src={logo} className="img-thumbnail" id="image-about" alt="about me" />
        </Col>
        <Col md={8}>
          <div className="content">
            <h3>Misi</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia possimus excepturi esse non delectus fuga aspernatur nisi, pariatur rem amet aut numquam animi beatae, explicabo reiciendis tempora quam molestias harum aliquam, aliquid quo! Id libero facere minus quisquam commodi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia possimus excepturi esse non delectus fuga aspernatur nisi, pariatur rem amet aut numquam animi beatae, explicabo reiciendis tempora quam molestias harum aliquam, aliquid quo! Id libero facere minus quisquam commodi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia possimus excepturi esse non delectus fuga aspernatur nisi, pariatur rem amet aut numquam animi beatae, explicabo reiciendis tempora quam molestias harum aliquam, aliquid quo! Id libero facere minus quisquam commodi?
            </p>
          </div>
        </Col>
      </Row>
    </section>
    </>
  );
};

export default About;
