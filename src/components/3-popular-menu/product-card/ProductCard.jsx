import React from "react";
import "./productcard.css";

const ProductCard = (props) => {
  const { title, price, imgUrl } = props.Item;

  return (
    <div className="single__product">
      <div className="product__img">
        <img src={imgUrl} alt="img" className="img-fluid" />
      </div>

      <div className="product__content">
        {/*  Star Icon */}
        <div className="rating text-center mb-3">
          <span>
            <i class="ri-star-fill"></i>
          </span>
          <span>
            <i class="ri-star-fill"></i>
          </span>
          <span>
            <i class="ri-star-fill"></i>
          </span>
          <span>
            <i class="ri-star-fill"></i>
          </span>
          <span>
            <i class="ri-star-fill"></i>
          </span>
        </div>

        {/*  title */}
        <h6>{title}</h6>

        <div className="d-flex align-items-center justify-content-between">
          {/*  Price */}
          <span className="price">
            Price :$ <span>{price}</span>
          </span>

          {/*  Shooping Icon */}
          <span className="shooping__icon">
            <i class="ri-shopping-cart-fill"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
