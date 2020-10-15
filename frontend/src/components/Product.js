import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Review from "./Review";

const Product = ({ product }) => {
  return (
    <>
      <Card>
        <Link to={`/product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

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
