import React from "react";
import { NavDropdown ,Nav ,Navbar, Offcanvas,Container, Button , Image, Row ,Col} from "react-bootstrap";
import { faEnvelope, faSearchLocation, faPhoneAlt, faPhoneSquareAlt, faMobile, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { BsFacebook, BsInstagram, BsGithub, BsTwitter, BsLinkedin, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.scss";
 function Footer(){
  return(<>
  <Container fluid className="bg-footer">
  <Container  className="py-3">
    <Row>
      <Col className="col-6">
      <div className="pt-4 pt-3"><h3 className="fw-bold">Services</h3></div>
      <div className="d-flex footerlist gap-5">
        <ul>
          <li>Website Development</li>
          <li>Wordpress Development</li>
          <li>Saas  Development</li>
          <li>Shopify Development</li>
          <li>Software Development</li>
        </ul>
        <ul>
          <li>AI Website Generator</li>
          <li>AI Chatbot</li>
          <li>Sales Email Tempates</li>
          <li>Marketing Analytis</li>
          <li>Email Marketing Software</li>
        </ul>
      </div>
      </Col>
      <div className="footerline"></div>
      <Col className="px-4">
      <div className="pt-4 pd-3"><h3 className="fw-bold">Company</h3></div>
      <div className="footerlist">
        <ul>
          <Link to="/" className="footHome"><li>Home</li></Link>
          <li>Services</li>
          <Link to="/Portfolio" className="footHome"> <li>Portfolio</li></Link>
          <li>Career</li>
          <li>Blog</li>
          <li>Produts</li>
        </ul>
      </div>
      <div className="py-2"><h3 className="fw-bold">Address</h3></div>
      <div className="footerlist">
       <p>House no 11-A, Street no 29, Farooq road shama seminar Ichra, Lahore ,Punjab.</p>
      </div>
      </Col>
      <Col>
      <div className="pt-4 pd-3"><h3 className="fw-bold">Others</h3></div>
      <div className="footerlist">
        <ul>
          <li>Domain Registration</li>
          <li>Wordpress hosting</li>
          <li>Privacy & Policy</li>
          <li>Contact Us</li>
          <li>Quotation</li>
          <li>FAQS</li>
        </ul>
      </div>
      <div className="py-2"><h3 className="fw-bold">Others</h3></div>
      <div className="footerlist">
      Be the first who gets our daily news and promotions directly on your email.
      </div>
      </Col>
    </Row>
  </Container>
  <Container className="pb-5">
    <Row>
    <Col className="col-9 d-flex">
    <div className="footer-line2"></div>
     <div>  <a className=" custom-social-link" target="_blank" href="https://www.youtube.com/channel/UCMYAfqVrzCDHOvlHJ1paIsw">
                    <BsFacebook className="footer-font1 mx-2" />
                  </a></div>
     <div>  <a className=" custom-social-link2" target="_blank" href="https://www.youtube.com/channel/UCMYAfqVrzCDHOvlHJ1paIsw">
                    <BsInstagram className="footer-font mx-3" />
                  </a></div>
     <div>  <a className=" custom-social-link3" target="_blank" href="https://www.youtube.com/channel/UCMYAfqVrzCDHOvlHJ1paIsw">
                    <BsYoutube className="footer-font mx-3"/>
                  </a></div>
     <div>  <a className=" custom-social-link4" target="_blank" href="https://www.youtube.com/channel/UCMYAfqVrzCDHOvlHJ1paIsw">
                    <BsLinkedin className="footer-font mx-3" />
                  </a></div>
     <div>  <a className=" custom-social-link5" target="_blank" href="https://www.youtube.com/channel/UCMYAfqVrzCDHOvlHJ1paIsw">
                    <BsGithub className="footer-font mx-3"/>
                  </a></div>
     <div>  <a className=" custom-social-link6" target="_blank" href="https://www.youtube.com/channel/UCMYAfqVrzCDHOvlHJ1paIsw">
                    <BsTwitter className="footer-font mx-2" />
                  </a></div>
    <div className="footer-line2"></div>
    </Col>
    <Col>
      <div className="pb-3">
        <input type="text"  className="footer-input" placeholder="Enter Your Email"/>
      </div>
      <Button className="Footer-btn">SUBSCRIBE</Button>
      </Col>
      </Row>
  </Container>
  </Container>
  </>)
 }
 export default Footer;