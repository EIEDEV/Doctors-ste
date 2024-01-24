import React from "react";
import "./review.css";
import { TestimonialsData } from "./testimonials";
import Slider from "react-slick";
import Reviewcard from "./reviewcard/reviewcard";

const Review = () => {
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
    <section id="review">
      <h2>REVIEWS</h2>
      <div className="container review-container">
        <Slider {...set}>
          {TestimonialsData.map((item) => (
            <Reviewcard className="rev">
              <img src={item.image} />
              <p>{item.comment}</p>
              <hr />
              <h5>{item.name}</h5>
            </Reviewcard>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Review;
