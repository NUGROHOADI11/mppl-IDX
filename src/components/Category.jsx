import { Nav } from "react-bootstrap";
import "../assets/styles/style.css"

const Category = () => {
  return (
    <section className="bg-dark" id="category">
       <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="#">as</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </section>
  );
}

export default Category;