import React, { useState, useEffect } from "react";
import "./menu.css";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../3-popular-menu/product-card/ProductCard";
import {
  fastFoodProducts,
  riceMenuProducts,
  dessertProducts,
  pizzaProducts,
  coffeeProducts,
} from "../../assets/fake-data/products";

const Menu = () => {
  const [filter, setFilter] = useState("RICE_MENU");
  const [products, setProducts] = useState(riceMenuProducts);

  useEffect(() => {
    if (filter === "RICE_MENU") {
      setProducts(riceMenuProducts);
    }

    if (filter === "FAST_FOOD") {
      setProducts(fastFoodProducts);
    }

    if (filter === "PIZZA") {
      setProducts(pizzaProducts);
    }

    if (filter === "DESSERT") {
      setProducts(dessertProducts);
    }

    if (filter === "COOFE") {
      setProducts(coffeeProducts);
    }
  }, [filter]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">Our Menu Pack</h3>
          </Col>

          {/* Button */}
          <Col lg="12" className="text-center mb-5">
            <button
              className={`filter-btn ${
                filter === "FAST_FOOD" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("FAST_FOOD")}
            >
              Fast Food
            </button>

            <button
              className={`filter-btn ${
                filter === "RICE_MENU" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("RICE_MENU")}
            >
              Rice Food
            </button>

            <button
              className={`filter-btn ${
                filter === "PIZZA" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("PIZZA")}
            >
              Pizza
            </button>

            <button
              className={`filter-btn ${
                filter === "COOFE" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("COOFE")}
            >
              Coffe
            </button>

            <button
              className={`filter-btn ${
                filter === "DESSERT" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("DESSERT")}
            >
              Desserts
            </button>
          </Col>

          {/* Images */}
          {products.map((e) => (
            <Col lg="3" md="4" sm="6" xs="6" key={e.id} className="mb-3">
              <ProductCard Item={e} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
