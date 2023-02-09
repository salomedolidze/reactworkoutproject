import React from "react";

const AboutComp = ({ text1, text2, text3, image, title, className }) => {
  return (
    <section>
      <div className={`container about-container ${className}`}>
        <div className="section-image">
          <img src={image} alt=" Image" />
        </div>
        <div className="section-content">
          <h1>{title}</h1>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
