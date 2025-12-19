import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  {Link} from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
    <Navbar expand="xl" className="bg-body-white navigation ">
      <Container fluid>
        <Navbar.Brand className='navLogo' href="#"> <Link to="/home"><img src="https://client-sigma-orpin-60.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgigbig.c8b0941b.gif&w=256&q=75" alt="logo" />
        </Link> </Navbar.Brand>
       <Navbar.Toggle aria-controls="navbarScroll">
       <i className="fa-solid fa-bars customToggle"></i>
      </Navbar.Toggle>

       
        <Navbar.Collapse id="navbarScroll" className='slide'>
          
          <Nav
              
            className="me-auto my-2 my-lg-0 m-0 navitem"
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"  >Categories</Nav.Link>
            <Nav.Link href="#action2"  >Hire Project</Nav.Link>
            <Nav.Link href="#action2" >Hire a Team</Nav.Link>
            <Nav.Link href="#action2" >How it work</Nav.Link>
            <Nav.Link href="#action2" >Faq</Nav.Link>
          </Nav>
          <Form className="d-flex InputBtn ">
            <Form.Control 
              type="search"
              placeholder="Search... "
              className="me-2 shadow-sm navInput "
              aria-label="Search"
            />
            <Button  variant="outline-success  login"><Link to="/login">Log In</Link></Button>
            <Button variant="outline-success navbtn"> <Link  to="/sign-up"> Sign Up</Link></Button>
            <Button variant="outline-success navbtn">As a freelansar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar
