import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./cards/service-card";
import BlockTitle from "./block-title";
import blockTitleCircle from "../assets/images/round-circle-1-3.png";

const SERVICES_DATA = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1/1700.png",
    title: "",
    text:
      "Issue Digital certificates / documents using Digital locker service",
    link: "#"
  },
  {
    icon: "https://static.thenounproject.com/png/2714927-200.png",
    title: "",
    text:
      "Request, store & share digital certificates / documents using digital wallet",
    link: "#"
  },
  {
    icon: "https://i.pinimg.com/originals/7b/31/39/7b31396ccc2c501cbb52b224476b3fdf.png",
    title: "",
    text:
      "Verify Digital certificates / documents in real time using document verification system",
    link: "#"
  },
  
];
const Works = () => {
  return (
    <section className="services-style-one" id="works">
      <Container >
        <BlockTitle
          textAlign="center"
          image={blockTitleCircle}
          title={`How e-certifyme works ?`}
        />
        <Row>
          {SERVICES_DATA.map(({ icon, title, text, link }, index) => (
            <Col  className='mt-4' lg={4} md={6} sm={12} key={index}>
              <ServiceCard  icon={icon} title={title} text={text} link={link} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};


export default Works;
