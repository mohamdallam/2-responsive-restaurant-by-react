import "./popularmenu.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { popularMenuFood } from "../../assets/fake-data/products";
import ProductCard from "./product-card/ProductCard";

const PopularMenu = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2 className="popular__menu-title">Popular Food Menu</h2>
          </Col>

          {popularMenuFood.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              <ProductCard Item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularMenu;
