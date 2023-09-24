// Product.js
import React from "react";
// import { mockProducts } from "./data/MockProducts";
import "./Product.css";

const Product = ({ product }) => {

  const handleClick = () => {
  };

  return (
    <div className="col-sm-4">
      <div className="product-card product-text-center" onClick={handleClick}>
        <img
          src={product.imageUrl}
          className="product-card-img"
          alt={product.name}
        />
        <div className="card-body custom-card-body">
          <h2 className="product-card-title">{product.name}</h2>
          <p className="product-card-text">{product.description}</p>
          <p className="product-card-text">${product.price}</p>
          <a href="#" className="btn btn-primary">
            <i className="fas fa-cart-plus"></i> Purchase
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;