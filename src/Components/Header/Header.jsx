import React, { useState, useEffect } from "react";
import { NavDropdown ,Nav ,Navbar, Offcanvas,Container, Button , Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const ArLogo = "./Assets/ArLogo.png";
  return (
    <>
    <Container className="navbar-center">
      {[ 'xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid >
            <Navbar.Brand href="#" className='me-auto Arlogo-nav '><Image src={ArLogo} width={'100%'}/></Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  AR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 gap-3">
                <Nav.Link    className="fw-bold nav-lists"><Link className="Home" to="/">Home</Link></Nav.Link>
                  <NavDropdown
                  className="fw-bold nav-lists"
                    title="Services"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Web Development</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Wordpress Development
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Shopify Development
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link  to="/Portfolio" className="fw-bold nav-lists"><Link to="/Portfolio" className="Home">Portfolio</Link></Nav.Link>
                  <Nav.Link href="#action2" className="fw-bold nav-lists">Blog</Nav.Link>
                  <Nav.Link href="#action2" className="fw-bold nav-lists">About Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Button variant="dark">Contact US</Button>
            <Navbar.Toggle className="navbartoggle" aria-controls={`offcanvasNavbar-expand-${expand}`} />
          </Container>
        </Navbar>
      ))}
      </Container>
    </>
  );
}

export default Header;