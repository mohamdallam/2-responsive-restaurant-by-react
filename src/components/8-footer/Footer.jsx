import "./footer.css";
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const footerQuickLinks = [
  { display: "Terms & Condition", url: "#" },
  { display: "Privacy Policy", url: "#" },
  { display: "Return & Refund", url: "#" },
  { display: "Payment", url: "#" },
];

const footerLinks = [
  { display: "About", url: "#" },
  { display: "Menu", url: "#" },
  { display: "Recipes", url: "#" },
  { display: "Contact", url: "#" },
];

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          {/* 1 Col */}
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

          {/* 2 Col */}
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__link-title">Info Link</h5>
            <ListGroup>
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem className="link__item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* 3 Col */}
          <Col lg="2" md="4" sm="6">
            <h5 className="footer__link-title">Quick Links </h5>
            <ListGroup>
              {footerLinks.map((item, index) => (
                <ListGroupItem className="link__item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* 4 Col */}
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup>
              <ListGroupItem className="link__item">
                <i class="ri-map-pin-line"></i> Egypt, Alexandria
              </ListGroupItem>

              <ListGroupItem className="link__item">
                <i class="ri-mail-line"></i> example@gmail.com
              </ListGroupItem>

              <ListGroupItem className="link__item">
                <i class="ri-phone-line"></i> 0123456789
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <div className="footer__bottom">
        <p>copyright 2022 developed by Allam. All right reserved </p>
      </div>
    </div>
  );
};

export default Footer;
