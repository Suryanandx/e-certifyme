import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./cards/service-card";
import BlockTitle from "./block-title";
import blockTitleCircle from "../assets/images/round-circle-1-1.png";

const SERVICES_DATA = [
  {
    icon: "https://static.thenounproject.com/png/1472670-200.png",
    title: "People ownership",
    text:
      "Provides Issuing institutions and People ownership of their digital credentials such as digital certificates or digital documents",
    link: "#"
  },
  {
    icon: "https://static.thenounproject.com/png/1551947-200.png",
    title: "People autonomy",
    text:
      "Provides Issuing institutions and People autonomy over how they use their digital credentials such as digital certificates or digital documents.",
    link: "#"
  },
  {
    icon: "https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-3-1/16/2188-512.png",
    title: "Verify Digitally",
    text:
      "Provides relying third parties the ability to verify digital certificates or to verify digital documents  instantly.",
    link: "#"
  },
  {
    icon: "https://www.pinclipart.com/picdir/big/15-150392_computer-icons-clip-art-vector-free-library-secure.png",
    title: "Secure and Perfect \n Integration",
    text:
      "Provides cutting-edge security to enable the global trust economy.",
    link: "#"
  }
];
const Services = () => {
  return (
    <section className="services-style-one" id="service">
      <Container >
        <BlockTitle
          textAlign="center"
          image={blockTitleCircle}
          title={`Features`}
        />
        <Row>
          {SERVICES_DATA.map(({ icon, title, text, link }, index) => (
            <Col  className='mt-4' lg={6} md={6} sm={12} key={index}>
              <ServiceCard  icon={icon} title={title} text={text} link={link} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
