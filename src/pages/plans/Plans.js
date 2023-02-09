import React from "react";
import "./plans.css";
import Header from "../../components/Header";
import Card from "../../UI/Card";
import { plans } from "../../data";
import headerimage from "../../images/header.jpg";
const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={headerimage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        expedita sequi illo quod deserunt delectus?
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disable" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
