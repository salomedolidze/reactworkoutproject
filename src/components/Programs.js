import React from "react";
import { FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { programs } from "../data";
import Card from "../UI/Card";
import SectionHeader from "./SectionHeader";
import { AiFillCaretRight } from "react-icons/ai";
const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHeader icon={<FaCrown />} title="Program" />

        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
