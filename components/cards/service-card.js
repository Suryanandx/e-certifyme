import React from "react";

const ServiceCard = ({ icon, title, text, link }) => {
  return (
    <div  className="single-service-one">
      <div className="hover-block"></div>
      <img width="120px" src={icon}/>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="line-block"></div>
      {/* <a href={link} className="more-link">
        Read More
      </a> */}
    </div>
  );
};

export default ServiceCard;
