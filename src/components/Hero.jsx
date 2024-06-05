import '../assets/styles/style.css'
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <>
      <section className="custom-jumbotron">
        <div className="container">
          <h1 className="display-2 fw-semibold text-warning">Maniskan</h1>
          <h1 className="display-2 fw-bold text-dark">Hari Pahitmu</h1>
          <p className="lead fw-normal text-dark mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia <br />
            possimus excepturi esse non delectus fuga aspernatur nisi, pariatur rem amet <br />
            aut numquam animi beatae, explicabo reiciendis tempora quam molestias<br />
          </p>
          <Button variant="primary">Order Now</Button>{' '}
        </div>
      </section>
    </>
  );
};

export default Hero;
