import React from "react";

const ServiceCard2 = ({ icon, title, text, link }) => {
  return (
      <>
    <div style={{width: '300px'}} className="">
      <div className="hover-block"></div>
     
     <img width= '370' style={{marginRight: '20px'}} src={icon}/>
     
     
      {/* <a href={link} className="more-link">
        Read More
      </a> */}
    </div>
    
    
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
    <p style={{boxShadow: 'initial', fontSize: '25px'}}>{text}</p>
    </div>
    </>
  );
};

export default ServiceCard2;
