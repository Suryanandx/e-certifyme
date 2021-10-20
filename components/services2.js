import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard2 from "./cards/service-card2";
import BlockTitle from "./block-title";
import blockTitleCircle from "../assets/images/round-circle-1-2.png";

const SERVICES_DATA = [
  {
    icon: "https://images.pexels.com/photos/7821708/pexels-photo-7821708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "High Creative App \n Display",
    text:
      "Document Issuance System",
    link: "#"
  },
  {
    icon: "https://images.pexels.com/photos/2433164/pexels-photo-2433164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Unique and Custom \n Options",
    text:
      "Document eWallet",
    link: "#"
  },
  {
    icon: "https://images.pexels.com/photos/1901388/pexels-photo-1901388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Secure and Perfect \n Integration",
    text:
      "Document Verification System",
    link: "#"
  },
 
];
const Services2 = () => {
  return (
    <section className="services-style-one" id="products">
      <Container >
        <BlockTitle
          textAlign="center"
          image={blockTitleCircle}
          title={`Products`}
        />
        <Row>
          {SERVICES_DATA.map(({ icon, title, text, link }, index) => (
            <Col  className='mt-4' lg={4} md={6} sm={12} key={index}>
              <ServiceCard2  icon={icon} title={title} text={text} link={link} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services2;
