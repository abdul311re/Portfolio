import React ,{useRef }from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import ContactUs from '../../Components/Contactus/ContactUs';
import './Portfolio.scss';
import LabTabs from '../../Components/Seo-multiple-page/Multiplepage';

function Portfolio() {
  const Portanime ="./Assets/Portfolio/Portanime.png";
  const section4Ref = useRef(null);

  const scrollToSection4 = () => {
    section4Ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <Container className='pb-5'>
      <Row>
        <Col className='col-8'>
          <div className='Port-hero py-5'>
            <p className='pt-3 px-2'>Hi There! I'm</p>
            <h2 className='fw-bold'>ABDUL REHMAN</h2>
            <h2 className='fw-bold'>A <span className='Portheadcolor'><Typewriter words={['FULL STACK', 'WORDPRESS']} loop={true} typeSpeed={120} deleteSpeed={80}  /><Cursor cursorStyle="|" /></span> DEVELOPER</h2>
            <h2 className='fw-bold '>@WELLCREATOR, PAKISTAN</h2>
            <p className='w-75 py-2'>Transform your online space with our expertise in web development and WordPress. We create websites that are as captivating as they are effective, seamlessly blending design excellence with user-friendly functionality. </p>
            <Button className='Port-hero-btn' onClick={scrollToSection4}>Contact Us</Button>
          </div>
        </Col>
        <Col>
        <Image src={Portanime} fluid  className='py-5'/> 
        </Col>
      </Row>
    </Container>
    {/* Second Portion */}
    <Container className='py-5'>
      <Row className='port-sec gap-5'>
        <Col className='wordcard-1'>
        <div><h3>FRONTEND</h3></div>
        <div><p>HTML</p></div>
        <div><p>CSS</p></div>
        <div><p>JAVASCRIPT</p></div>
        </Col>
        <Col className='wordcard-1'>
        <div><h3>FRAMEWORKS</h3></div>
        <div><p>REACT.JS</p></div>
        <div><p>BOOTSTRAP</p></div>
        <div><p>TAILWIND.CSS</p></div>
        </Col>
        <Col className='wordcard-2'>
        <div><h3>BACKEND</h3></div>
        <div><p>PHP</p></div>
        <div><p>MySQL</p></div>
        </Col>
        <Col className='wordcard-1'>
        <div><h3>EXTRA</h3></div>
        <div><p>GIT</p></div>
        <div><p>GITHUB</p></div>
        <div><p>BITBUCKET</p></div>
        </Col>
      </Row>
    </Container>
    {/* Third Portion */}
    <LabTabs/>
    {/* Fourth Portion */}
    <div id="section4"  ref={section4Ref}></div>
    <ContactUs />
  </>);
}

export default Portfolio;
