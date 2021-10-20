import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./block-title";
import blockTitleCircle from "../assets/images/round-circle-1-3.png";
import mocup from "../assets/images/about1.png";

const FeatureOne = () => {
  return (
    <section id='about2' className="feature-style-one">
      <Container>
        <hr className="style-one" />
        <Row>
          <Col lg={6}>
            <div className="content-block">
              <BlockTitle
                textAlign="left"
                image={blockTitleCircle}
                title={`How e-Certifyme does`}
              />
              <p style={{fontSize: '18px'}}>
              e-Certifyme gives a system to give digital certificates/documents and to utilize decentralized check
without weak links. e-Certifyme is pointed toward creating Interoperable &quot;Self-Sovereign Identity&quot;
(SSI) assisting individuals with deciding when and how they self-uncover their digital certifications.
              </p>
              {/* <ul className="feature-lists">
                <li>
                  <i className="fa fa-check"></i> Refresing to get such a
                  personal touch.{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Duis aute irure dolor in
                  reprehenderit in voluptate.
                </li>
                <li>
                  <i className="fa fa-check"></i> Velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </li>
              </ul> */}
              <a href="#" className="feature-btn">
                Learn More
              </a>
            </div>
          </Col>

          <Col lg={4}>
            <div className="image-block">
              <img src={mocup} alt="Awesome Image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureOne;
