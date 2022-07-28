import "./download.css";
import React from "react";
import appImage from "../../assets/images/app.png";
import { Container, Row, Col } from "react-bootstrap";

const Download = () => {
  return (
    <section>
      <Container>
        <Row className="app__container">
          <Col lg="6" md="6">
            <div className="app__img">
              <img src={appImage} className="img-fluid" alt="" />
            </div>
          </Col>

          <Col lg="6" md="6" className="app__content pt-5">
            <div>
              <h5>Download our app</h5>
              <h2>
                Never Fell Hungry Download Our Mobile App Order Delicious Food
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                nobis nisi saepe vel ducimus voluptatum rerum distinctio sint
                atque. Tenetur ullam eius quibusdam voluptate, nisi mollitia
                atque? Est, ea deleniti.
              </p>

              <div className="app__btn d-flex align-items-center gap-5 mt-4">
                <button className="btn__apple">
                  <i class="ri-apple-line"></i>
                  <a href="#">Apple Store</a>
                </button>

                <button className="btn__google">
                  <i class="ri-google-play-line"></i>
                  <a href="#">Google Store</a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Download;
