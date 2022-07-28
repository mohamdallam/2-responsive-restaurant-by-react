import React from "react";
import "./chooseus.css";
import { Container, Row, Col } from "react-bootstrap";
import pasta from "../../assets/images/pasta.png";
import SingleFeatures from "./singlefeature/SingleFeatures";

const ChooseUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <img src={pasta} alt="" className="img-fluid" />
          </Col>

          <Col lg="6" md="6">
            <div className="choose__content">
              <h4>Who we are?</h4>
              <h2>Take a look at the benefits we offfer you</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus unde fugiat, consectetur ipsum impedit possimus hic
              </p>
            </div>

            <div className="features mt-4">
              <div className="feature1 d-flex align-items-center gap-5">
                <SingleFeatures
                  title="Free Home Delivery"
                  icon="ri-truck-line"
                  text="Lorem ipsum dolor sit amet consectetur"
                />

                <SingleFeatures
                  title="Return & Refund"
                  icon="ri-money-dollar-circle-line"
                  text=" consectetur ipsum impedit possimus hic"
                />
              </div>

              <div className="feature1 d-flex align-items-center gap-5">
                <SingleFeatures
                  title="Secure Payment"
                  icon="ri-secure-payment-line"
                  text="Lorem ipsum dolor sit amet consectetur"
                />

                <SingleFeatures
                  title="24 Hours"
                  icon="ri-24-hours-line"
                  text=" consectetur ipsum impedit possimus hic"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
