import React from "react";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";
import Image from "../images/trener.jpg";
import SectionHeader from "./SectionHeader";
const Value = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values__right">
          <SectionHeader icon={<GiCutDiamond />} title="values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nisi sit et similique distinctio nulla
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
