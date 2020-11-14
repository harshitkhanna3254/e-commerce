import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      variant="success"
      style={{
        width: "150px",
        height: "150px",
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
};

export default Loader;
