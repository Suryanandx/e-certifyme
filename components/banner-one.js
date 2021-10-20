import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moc from "../assets/images/banner-moc-1-1.png";

const BannerOne = () => {
  return (
    <section className="banner-style-one" id="home">
      <span className="bubble-1"></span>
      <span className="bubble-2"></span>
      <span className="bubble-3"></span>
      <span className="bubble-4"></span>
      <span className="bubble-5"></span>
      <span className="bubble-6"></span>
      <img src={moc} className="banner-mock" alt="Awesome Image" />
      <Container>
        <Row>
          <Col xl={6} lg={8}>
            <div className="content-block">
              <h3>
              Introducing e-Certifyme.<br />
               </h3>
              <p>
             
              Now access your certificates or documents from anyplace and whenever
              </p>
              

              <div className="button-block">
                <a href="#about" className="banner-btn">
                 
                  <span>Explore Now</span>
                </a>
               
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerOne;
