import React from "react";
import "./ward.css";
import Hospital from "./data";

const Ward = () => {
  return (
    <section id="wards">
      <h2>HOSPITAL DEPARTMENTS</h2>
      <div className="container ward-container">
        {Hospital.map((item) => (
          <div className="dental">
            <img src={item.image} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ward;
