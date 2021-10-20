import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoImage from "../assets/images/logo-1-1.png";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <span className="bubble-1"></span>
        <span className="bubble-2"></span>
        <span className="bubble-3"></span>
        <span className="bubble-4"></span>
        <span className="bubble-5"></span>
        <span className="bubble-6"></span>
        <Container>
          <div className="inner-container">
            <Row>
              <Col lg={4} md={6} sm={12}>
                <div className="footer-widget">
                  <a href="/">
                    <img width='265px'  src={logoImage} alt="Awesome Image" />
                  </a>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Address</h3>
                  </div>
                  <ul className="contact-list">
                    <li>888 999 0000</li>
                    <li>needhelp@ecertifyme.com</li>
                    <li>
                      855 road, Some place at <br />
                      Pune  600
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Explore</h3>
                  </div>
                  <ul className="links-list">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    
                    
                  </ul>
                </div>
              </Col>
              {/* <Col lg={2} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Links</h3>
                  </div>
                  <ul className="links-list">
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Clients</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </Col> */}
              <Col lg={3} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Follow</h3>
                  </div>
                  <div className="social-block">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>

      <div className="bottom-footer text-center">
        <Container>
          <p>
            &copy; copyright 2021 by <a href="/">ecertifyme.com</a>
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
