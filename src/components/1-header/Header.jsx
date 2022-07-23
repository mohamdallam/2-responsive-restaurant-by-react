import React from "react";
import "./header.css";
import { Container } from "react-bootstrap";

const navLink = [
  { display: "Home", url: "#" },
  { display: "About", url: "#" },
  { display: "Menu", url: "#" },
  { display: "Recipes", url: "#" },
  { display: "Contact", url: "#" },
];

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          {/* LOGO */}
          <div className="logo">
            <h2 className="d-flex align-item-center gap-1">
              <span>
                <i class="ri-restaurant-2-line"></i>
              </span>
              Chef Food
            </h2>
          </div>

          {/* NavBar Center */}
          <div className="nav__menu">
            <div className="nav__list d-flex align-items-center mb-0">
              {navLink.map((item, index) => (
                <li className="nav__item " key={index}>
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </div>
          </div>

          {/* Right Menu */}
          <div className="menu__right">
            <div className="custom__search">
              <input type="text" placeholder="Search item ..." />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </div>

          {/* Mobile  Only */}
          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
