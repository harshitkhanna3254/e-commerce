import React from "react";
import { Card } from "react-bootstrap";

import Review from "./Review";

const Product = ({ product }) => {
  return (
    <>
      <Card>
        <a href={`/product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>

          <Card.Text as="div" style={{ marginBottom: "0.2rem" }}>
            <Review rating={product.rating} numReviews={product.numReviews} />
          </Card.Text>

          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default Product;
