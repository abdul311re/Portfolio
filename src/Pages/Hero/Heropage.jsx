import React from "react";
import { Container, Row, Col, Image  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Heropage.scss";
function Heropage(){
  const Mainpage ="./Assets/Heropage/Mainpage.png";
  return(<>
     <Container fluid>
       <Row >
        <Col sm={6}>
        <div className="Hero1-dev">
          <h1 className=" Hero1-head">WEB & WORDPRESS DEVELOPMENT</h1>
          <p className="py-3">Transform your online space with our expertise in web development and WordPress. We create websites that are as captivating as they are effective, seamlessly blending design excellence with user-friendly functionality. Let us help you tell your brand story and achieve your online goals. </p>
        </div>
        </Col>
        <Col sm={6} ><Image src={Mainpage} width={'100%'}/>
        </Col>
       </Row>
     </Container>
  </>)
}
export default Heropage;
