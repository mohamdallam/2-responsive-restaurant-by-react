import React, { useRef } from "react";
import "./header.css";
import { Container, Row, Col } from "react-bootstrap";

const navLink = [
  { display: "Home", url: "#" },
  { display: "About", url: "#" },
  { display: "Menu", url: "#" },
  { display: "Recipes", url: "#" },
  { display: "Contact", url: "#" },
];

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <div className="header ">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between pt-3">
          {/* LOGO */}
          <div className="logo">
            <h2 className="d-flex align-item-center">
              <span>
                <i class="ri-restaurant-2-line"></i>
              </span>
              Chef Food
            </h2>
          </div>

          {/* NavBar Center */}
          <div className="nav__menu" ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5 ">
              <ul className="nav__list d-flex">
                {navLink.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Right Menu */}
              <div className="menu__right">
                <div className="custom__search d-flex align-items-center ">
                  <input placeholder="Search item ..." />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="cart__icon">
              <i class="ri-shopping-cart-2-fill"></i>
              <span className="badge">2</span>
            </span>
          </div>

          {/* Mobile  Only */}
          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
