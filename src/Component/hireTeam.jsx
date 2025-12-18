import React, { useState, Component } from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





const HireTeam = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrow: false,

  };
  return (
    <div>
      <div className="hire-btn">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            {/* <Col sm={12}>
              <Nav variant="pills" className="d-flex align-items-center justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <h5>I want to </h5>
                    <h2>Hire Team</h2>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <h5>I want to</h5>
                    <h2>Hire Project</h2>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col> */}
            <Col sm={12}>
              <Tab.Content className='column'>
                <Tab.Pane eventKey="first">
                  <div className="hire-container">

                    <div className="hire-left">
                      <h2 className="hire-title">
                        One Price,<br />Multiple Creative Needs,
                      </h2>
                      <hr />

                      <p className="hire-sub">
                        Why pay more for every small project?
                        With GigBig, you get multiple tasks completed
                        under one smart, transparent price.
                      </p>

                      <h4 className="hire-heading">Professional Team</h4>
                      <p className="hire-para">
                        Our experienced multi-disciplinary team handles all your
                        design, branding, and creative needs — all at once —
                        with consistent quality and no hidden fees.
                      </p>

                      <h4 className="hire-heading">Advantages</h4>
                      <p className="cmd">
                        Enjoy the flexibility, creativity, and budget-friendly pricing
                        of working with a professional team that puts your success first.
                      </p>

                      <button className="hire-btn">View Plans ➜</button>
                    </div>

                    {/* RIGHT IMAGE BOX */}
                    <div className="hire-right">
                      <div className="hire-image-box">
                        {/* <img
                          src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg"
                          className="hire-img"
                          alt="Work Preview"
                        /> */}
                        <div className="slider-container hire-slider">
                          <Slider {...settings}>
                            <div>
                              <img src="https://client-sigma-orpin-60.vercel.app/assets/img/One%20Price,Multiple-1.jpg" alt='hireimg' />
                            </div>
                            <div>
                              <img src="/public/img/hire-img2.jpg" alt='hireimg' />

                            </div>
                            <div>
                              <img src="https://client-sigma-orpin-60.vercel.app/assets/img/One%20Price,Multiple-1.jpg" alt='hireimg' />

                            </div>
                            <div>
                              <img src="https://client-sigma-orpin-60.vercel.app/assets/img/One%20Price,Multiple-1.jpg" alt='hireimg' />

                            </div>
                          </Slider>
                        </div>

                      </div>
                    </div>

                  </div>

                </Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

    </div>
  )
}

export default HireTeam
