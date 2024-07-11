import { Container, Image, Breadcrumb, Row, Col, } from "react-bootstrap";
import React, { Component, useState, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContacctUs.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSearchLocation, faPhoneAlt, faPhoneSquareAlt, faMobile, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
function ContactUs() {
  const [phone, setPhone] = useState('');
  const customInputStyle = {
    border: 'none',
    boxShadow: 'none', // Optional: remove any shadow that might be present
    outline: 'none',   // Optional: remove the outline on focus
  };
  return (
    <>
      <Container className="my-lg-5">
        <Row className="ContactUs-2">
          <Col lg={6} md={5} sm={12} className="contact-1">
            <h4 className="  px-2 ">CONTACT US</h4>
            <h1 className="connect">Connect with us.</h1>
            <p className="our mt-lg-4 mb-lg-5">Our digital marketing team is always ready to help. Give us a call, send us an email, or fill out the form below.</p>
            <Row>
              <div className="add-cont d-flex flex-column">
                <Col>
                  <div >
                    <a className="text-muted text-decoration-none">
                      <FontAwesomeIcon className="contactus-text-icon" icon={faSearchLocation} />
                      &nbsp; <span className="contactus-text"> OFFICE ADDRESS</span>
                    </a>
                    <p className="py-2"> 93 Bennetts Castle Lane, Dagenham, England, RM8 3YB</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column">
                    <a className="text-muted text-decoration-none">
                      <FontAwesomeIcon className="contactus-text-icon" icon={faPhoneAlt} />
                      &nbsp; <span className="contactus-text"> PHONE NUMBER</span>
                    </a>
                    <p className="py-2 "> <FontAwesomeIcon className="contactus-text-icon" icon={faMobileAlt} /> <span className="px-2"> +44 7354 473871</span></p>
                  </div>
                </Col>
              </div>
            </Row>
            <div>
              <div className="d-flex flex-column my-lg-3">
                <a className="text-muted text-decoration-none">
                  <FontAwesomeIcon className="contactus-text-icon" icon={faEnvelope} />
                  &nbsp; <span className="contactus-text">EMAIL US</span>
                </a>
                <p className="py-2 ">info@wellcreator.com</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={7} sm={12} className="col2-con">
            <div className="input-fields-main-container">


              <div className="form">
                <div className="tab-content">
                  <div id="contact">
                    <form action="/" method="post">
                      <div className="top-row">
                        <div className="field-wrap">
                          <div className="name">Name</div>
                          <input type="text" id="name" placeholder="name" className="inp1-name" required autoComplete="off" />
                        </div>
                        <div className="field-wrap1">
                          <div className="name">Company Name</div>
                          <input type="text" id="companyName" placeholder="Company" required autoComplete="off" />
                        </div>
                      </div>
                      <div className="second-row">
                        <div className="field-wrap2 " >
                          <div className="name">Phone No</div>

                          <PhoneInput className="mt-2 inter-phone-input"
                            country='us'
                            regions={['america', 'europe', 'asia', 'oceania', 'africa']}
                            inputStyle={{ borderRadius: '0rem', boxShadow: 'none', width: '100%', padding: '19px', paddingLeft: '40px', border: '1px solid' }}
                            dropdownStyle={{ width: '650%', border: 'none' }}
                            buttonStyle={{ border: '1px solid', backgroundColor: 'none' }}
                          />

                        </div>
                        <div className="field-wrap3">
                          <div className="name">Email id</div>
                          <input type="email" placeholder="youremail@gmail.com" id="email" required autoComplete="off" />
                        </div>
                      </div>
                      <div className="field-wrap4">
                        <div className="name">Webite</div>
                        <input type="url" placeholder="www.yourwebsite.com" id="website" required autoComplete="off" />
                      </div>
                      <div className="field-wrap5">
                        <div className="name">How we can help you</div>
                        <input type="text" id="help" placeholder="Discription" required autoComplete="off" />
                      </div>
                      <button type="submit" className="button-con button-block mb-3">Get Started</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Col >
        </Row >
      </Container>
    </>
  );
}
export default ContactUs;  