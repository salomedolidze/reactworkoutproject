import React from "react";
import FAQs from "../../components/FAQs";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Testimonials from "../../components/Testimonials";
import Value from "../../components/Value";
import "./home.css";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Value />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
