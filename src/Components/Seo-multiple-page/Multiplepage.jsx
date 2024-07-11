import Box from '@mui/material/Box';
import React from 'react'
import './Multiplepage.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { Container, Image, Carousel, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
const tick = "./Assets/Seo/hero-tick.svg";

// images

const localseo = "./Assets/Seo/localseo.jpg"
const NationalSeo = "./Assets/Seo/national-seo.jpg"
const Ecommerce = "./Assets/Seo/ecommerc-seo.jpg"

export default function Multiplepage() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container className='mt-lg-5'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ fontSize: [20], display: 'flex', justifyContent: 'space-around ', borderBottom: 1, borderColor: 'divider' }}>

                        <TabList onChange={handleChange} aria-label="lab API tabs example">

                            <Tab label="Local SEO" value="1" />
                            <Tab label="National SEO" value="2" />
                            <Tab label="ECommerce SEO" value="3" />

                        </TabList>
                    </Box>

                    <TabPanel value="1">
                        <Row>
                            <Col lg={6}>
                                <div className="seo-card-container1">
                                    <div className="f-card">
                                            <h2>With Affordable Seo Services in London </h2>
                                            <p>Beat the market competitors with our unbeatable SEO packages. With a proven marketing strategy, we help businesses become brands. Our talented experts follow all new techniques to rank your website higher, boosting your business visibility and driving more traffic.
                                            </p>
                                            <p className='seo-hero-para-text-li'>
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }}
                                                />Proven strategy
                                            </p>
                                            <p className='seo-hero-para-text-li'  >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />White-hat SEO</p>
                                            <p className='seo-hero-para-text-li'  >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />Follow Google Core updates</p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />KPI-driven reports</p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />Organic keywords
                                            </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="seo-card-container">
                                    <div>
                                        <div>
                                            <div className="s-card ">
                                                    <img src={localseo} alt="SEO Link Building" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPanel>
                    <TabPanel value="2">
                        <Row>
                            <Col lg={6} className="order-lg-2">
                                <div className="seo-card-container1">
                                    <div className="f-card">

                                            <h2>National SEO with Affordable SEO Company</h2>
                                            <p>Outperform your market competitor with National SEO from Wellcreator! Unlock your business’s full potential with the best SEO experts and get your business noticed with our proven strategies. Chase down the business market with cultural nuances, national trends, events, and news. This is where the influence lies!
                                            </p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }}
                                                />Broad keywords
                                            </p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />National long-tail keywords</p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />Quality content to reflect the nationwide audience</p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />National trends</p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />Ranking Monitoring
                                            </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} >
                                <div className="seo-card-container">
                                    <div>
                                        <div>
                                            <div className="s-card">
                                                    <img src={NationalSeo} alt="Local SEO Company" className="img-fluid" style={{}} />
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPanel>
                    <TabPanel value="3">
                        <Row>
                            <Col lg={6}>
                                <div className="seo-card-container1">
                                    <div className="f-card">
                                        
                                            <h2>E-commerce Website and SEO Packages</h2>
                                            <p> Unleash your online sales with small business SEO packages. Not only do we develop, but we also optimize your e-commerce online store. Our skilled SEO crew optimizes your online store to generate unbeatable sales. By combining persuasive content with the ranking SEO factor, we drive conversions and increase revenue. </p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }}
                                                />CRO ( Conversion Rate Optimization)
                                            </p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />Product Optimization</p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />Optimized Product Description</p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />Optimized Category Pages</p>
                                            <p className='seo-hero-para-text-li' >
                                                <img
                                                    alt="check"
                                                    className="lazyloaded mx-lg-3"
                                                    decoding="async"
                                                    src={tick}
                                                    style={{ width: "20px" }} />Mobile Optimization
                                            </p>

                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="seo-card-container">
                                    <div>
                                        <div>
                                    
                                                <img src={Ecommerce} alt="Local SEO Experts" className="img-fluid" />
                                        
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPanel>

                </TabContext>

            </Box >
        </Container >
    );
}