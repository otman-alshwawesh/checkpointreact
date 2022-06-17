import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Nav, Form, FormControl, Button, Navbar, Container, Carousel, Card } from 'react-bootstrap';
import vb1 from "./amig/vb1.jpg"
import vb2 from "./amig/vb2.jpg"
import vb3 from "./amig/vb3.jpg"
import a1 from "./amig/a1.jpg"
import a2 from "./amig/a2.jpg"
import a3 from "./amig/a3.jpg"

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel >
        <Carousel.Item>
          <img height="500"
            className="d-block w-100"
            src={vb1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="500"
            className="d-block w-100"
            src={vb2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="500"
            className="d-block w-100"
            src={vb3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='gh'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={a3} height="300px" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={a1} height="300px" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={a2} height="300px" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <Form className="mb">
        <fieldset>
          <Form.Group  >
            <Form.Label htmlFor="disabledTextInput">a house</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="house" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">the phone</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="phone" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Gmail</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Gmail" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
            <Form.Select id="disabledSelect">
              <option>Disabled select</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"

            />
          </Form.Group>


          <Button className='ch' type="submit">Submit</Button >
        </fieldset>
      </Form>
      <footer className='ch' direction="horizontal" gap={3}>
        <Button className='ch' variant="secondary">Sign up for our newsletter</Button>
        <div className="" />
        <Button className='ch' variant="outline-danger">SUBSCRLBE</Button>

        {/* <Form.Control className="ch" placeholder="Emali address..." /> */}

        <div className="footer-copyright ">
          © 2022 Copyright:
          <a href="#"> Mangateam.com</a>
        </div>
        <h5 className="text-uppercase">Links</h5>

      </footer>

    </div>
  );
}

export default App;
