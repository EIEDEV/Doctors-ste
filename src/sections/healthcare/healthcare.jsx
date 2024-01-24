import React from "react";
import data from "./data";
import "./healthcare.css";
import Slider from "react-slick";
import Card from "./healthcare/card";

const Healthcare = () => {
  const set = {
    className: "slided",
    dots: true,
    Infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
      },
      {
        breakpoint: 801,
        settings: { slidesToShow: 2, slidesToScroll: 2, dots: true },
      },
    ],
  };
  return (
    <section id="healthcare">
      <h2>Healthcare</h2>
      <div className="container healthcare-container">
        <Slider {...set}>
          {data.map((item) => (
            <Card classname="healthcare - container" key={item.id}>
              <img src={item.images} alt="" />
              <h4>{item.text}</h4>
            </Card>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Healthcare;
