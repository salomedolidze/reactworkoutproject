import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import headerimage from "../../images/header.jpg";
import { GrMail } from "react-icons/gr";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={headerimage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        necessitatibus, omnis dolor ipsam cupiditate perspiciatis?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:dolidzesalome36@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GrMail />
            </a>
            <a
              href="http://m.me/salomedolidze"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="http://wa.me/+955599701127"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
