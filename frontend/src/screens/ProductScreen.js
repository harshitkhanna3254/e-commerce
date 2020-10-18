import React, { useState, useEffect } from "react";
import Review from "../components/Review";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import axios from "axios";

const ProductScreen = ({ match }) => {
  // const product = products.find((product) => product._id === match.params.id);

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };

    fetchProduct();
  }, [match]);

  return (
    <>
      <Link className="btn btn-outline-primary my-3" to="/">
        Back to HomeScreen
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} thumbnail fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2 style={{ color: "black" }}>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Review rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              <span className="font-weight-bold">Description: </span>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <span className="font-weight-bold">${product.price}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <span
                      className={`font-weight-bold ${
                        product.countInStock > 0
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
