import React from "react";

const ServiceCard2 = ({ icon, title, text, link }) => {
  return (
      <>
    <div style={{backgroundImage: `url("${icon})`, backgroundSize: 'cover', height: '300px'}} className="">
      <div className="hover-block"></div>
     
     
     
     
      {/* <a href={link} className="more-link">
        Read More
      </a> */}
    </div>
    <p style={{boxShadow: 'initial', fontSize: '20px'}}>{text}</p>
    <div className="line-block "></div>
    </>
  );
};

export default ServiceCard2;
