import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import categories from '../categories';

function Header({ handleCategoryFilter, handleClikHome, handleClikDiscount }) {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand onClick={handleClikHome}>IT shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link onClick={handleClikHome}>Home</Nav.Link>
                        <Nav.Link onClick={handleClikDiscount} href="#action2">Discount</Nav.Link>
                        <NavDropdown title="Category" id="navbarScrollingDropdown">
                            {
                                categories.map(elem => (
                                    <Dropdown.Item
                                        onClick={()=> handleCategoryFilter(elem.id)}
                                        key={elem.id}>
                                        {elem.title}
                                    </Dropdown.Item>
                                ))
                            }
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
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
    );
}

export default Header;