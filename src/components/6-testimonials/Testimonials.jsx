import React from "react";
import "./testimonials.css";
import { Container, Row, Col } from "react-bootstrap";
import testmonImage from "../../assets/images/review1.png";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="slider__wrapper d-flex align-items-center gap-5">
              <div className="slider__content w-50">
                <h2>What our customers are saying</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi dignissimos, qui suscipit unde quo, quaerat
                        reiciendis id expedita iusto officia explicabo nostrum
                        veritatis quam officiis ab dolorum cum. Doloremque,
                        quisquam!
                      </p>

                      <h6>Mohamed Allam</h6>
                      <p>Full Stack Developer</p>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi dignissimos, qui suscipit unde quo, quaerat
                        reiciendis id expedita iusto officia explicabo nostrum
                        veritatis quam officiis ab dolorum cum. Doloremque,
                        quisquam!
                      </p>

                      <h6>Mohamed Allam</h6>
                      <p>Full Stack Developer</p>
                    </div>
                  </div>
                </Slider>
              </div>

              <div className="slider__img w-50">
                <img src={testmonImage} alt="img" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
