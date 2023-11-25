import React from 'react';
import '../css/ProductDetailCard.css';

const ProductDetailCard = (props) => {
  const {image , title , description , price , button="Add to Cart"} = props.data
  return (
    <div className="product-card">
      <img src={image} alt="" className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">Rs. {price}</p>
        <button className="add-to-cart">{button}</button>
      </div>
    </div>
  );
};

export default ProductDetailCard;
