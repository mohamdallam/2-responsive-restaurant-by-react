import "./footer.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const footerLinks = [
  { display: "Terms & Condition", url: "#" },
  { display: "Privacy Policy", url: "#" },
  { display: "Terms & Condition", url: "#" },
  { display: "Payment", url: "#" },
];

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col lg="4" md="4" sm="6">
          <div className="logo">
            <h2 className="d-flex align-item-center gap-1 mb-4">
              <span>
                <i class="ri-restaurant-2-line"></i>
              </span>
              Chef Food
            </h2>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              omnis. Maxime eius fuga nihil harum aliquid ut aut
            </p>
          </div>
        </Col>

        <Col lg="2" md="4" sm="6">
          <h5 className="footer__link-title">Quick Links </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
