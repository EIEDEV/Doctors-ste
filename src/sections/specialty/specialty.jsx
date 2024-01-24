import React from "react";
import "./specialty.css";
import data from "./data";
import Slider from "react-slick";
import Card from "./../../card/card";

const set = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  swipeToSlide: true,
  slidesToScroll: 1,
  className: "slides",
  // autoplay: true,
  // autoplaySpeed: 6000,
  // cssEase: "linear",
  // pauseOnHover: true,
  responsive: [
    {
      breakpoint: 600,
      settings: { slidesToShow: 1, slidesToScroll: 1, dots: false },
    },
    {
      breakpoint: 801,
      settings: { slidesToShow: 2, slidesToScroll: 2, dots: false },
    },
  ],
};

const Specialty = () => {
  return (
    <section id="speciality">
      <div className="content">
        <div className="leaf"></div>
        <h2>SPECIALITY</h2>
      </div>
      <div className="container specialty-container">
        <Slider {...set}>
          {data.map((item) => (
            <Card key={item.id} className="about__card">
              <h4>{item.title}</h4>
            </Card>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Specialty;

// <Card key={item.id} className="about__card">
//   <h4>{item.title}</h4>
// </Card>
