import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import { sliderData } from "../../assets/fake-data/slider";
import "./heroslider.css";

const HeroSlider = () => {
  return (
    <section>
      <Container>
        <Slider>
          {sliderData.map((item) => (
            <div className="slider__wrapper d-flex align-items-center justify-content-between pt-5">
              <div className="slider__content w-50 ps-2">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>

              <div className="slider__img w-50">
                <img src={item.imgUrl} alt="img" className="w-100" />
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroSlider;
