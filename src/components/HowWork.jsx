import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const HowWork = () => {
  return (
    <div className='container-fluid'>
   <section className='topbottom-40px'>
     <div className="steps-section">
        <h1> How its Work</h1>
      <div className='how-work-container'>
        <Row className="g-4 justify-content-between ">
       
   <div className='col-lg-4 col-md-4 col-sm-12'>   
    <div className="d-flex justify-content-center">
            <div className="step-card">
              <i className="fas fa-arrow-down step-icon" ></i>

              <h3 className="step-title">Post Your Project</h3>
              <p className="step-text">Lorem ipsum dolor sit amet</p>

              <div className="step-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
            </div></div>
   <div className='col-lg-4 col-md-4 col-sm-12'>
     <div className="d-flex justify-content-center">
            <div className="step-card">
              <i className="fas fa-user-friends step-icon" ></i>

              <h3 className="step-title">Get Matched With Expert</h3>
              <p className="step-text">Lorem ipsum dolor sit amet</p>

              <div className="step-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div></div>
   <div className='col-lg-4 col-md-4 col-sm-12'> 
    <div className="d-flex justify-content-center">
            <div className="step-card">
              <i className="fas fa-dollar-sign step-icon" ></i>

              <h3 className="step-title">Pay Safely & Get Result</h3>
              <p className="step-text">Lorem ipsum dolor sit amet</p>

              <div className="step-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
            </div></div>
        </Row>
      </div>
    </div>











   </section>
   </div>





  )
}

export default HowWork
