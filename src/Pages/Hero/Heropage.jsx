import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image  } from "react-bootstrap";
import {Typewriter, Cursor} from 'react-simple-typewriter';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Heropage.scss";

function Heropage(){
  const Mainpage ="./Assets/Heropage/Mainpage.png";
  const Heroweb = "./Assets/Heropage/herowebdevelopment.png";
  const Herowordpress = "./Assets/Heropage/herowordpress.png";
  const Heroecommerce = "./Assets/Heropage/heroecommerce.png";
  const Herointegrated = "./Assets/Heropage/herointegranted.png";

  const text = Typewriter({
    words: ["EBSITE APP" , "ORDPRESS"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80
  });
  return(<>
     <Container fluid>
       <Row >
        <Col sm={6}>
        <div className="Hero1-dev">
        <div className="character-display">
        <h1 className=' Hero1-head'>W<span>{text}</span><span><Cursor cursorStyle="|"/></span></h1>
        <h2 className=' Hero2-head'>DEVELOPMENT</h2>
        </div>
          <p className="py-3">Transform your online space with our expertise in web development and WordPress. We create websites that are as captivating as they are effective, seamlessly blending design excellence with user-friendly functionality. Let us help you tell your brand story and achieve your online goals. </p>
        </div>
        </Col>
        <Col sm={6} ><Image src={Mainpage} width={'100%'}/>
        </Col>
       </Row>
     </Container>
     <Container>
       <Row>
        <Col lg={'3'}>
        <div className="wordcard-1">
              <div><Image src={Heroweb} style={{ objectFit: "cover", width:"90%" }} /></div>
              <p className="py-2 fw-bold wordcard-head">Website Development</p>
            </div>
        </Col>
        <Col>
        <div className="wordcard-1">
              <div><Image src={Herowordpress} style={{ objectFit: "cover", width:"75%"}} /></div>
              <div className="wordcard-head fw-bold">Wordpress Development</div>
            </div>
        </Col>
        <Col>
        <div className="wordcard-1">
              <div><Image src={Heroecommerce} style={{ objectFit: "cover", width:"100%"}} /></div>
              <div className="py-1 fw-bold wordcard-head">Ecommerce Development</div>
            </div>
        </Col>
        <Col>
        <div className="wordcard-1">
              <div><Image src={Herointegrated} style={{ objectFit: "cover", width:"85%"}} /></div>
              <div className=" fw-bold wordcard-head">Integrated Services</div>
            </div>
        </Col>
       </Row>
     </Container>
  </>)
}
export default Heropage;
