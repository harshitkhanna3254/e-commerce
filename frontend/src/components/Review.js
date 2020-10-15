import React from "react";
import PropTypes from "prop-types";

const Review = ({ rating, numReviews, colorBad, colorGood }) => {
  return (
    <div className="rating">
      <span style={rating >= 3.5 ? { color: colorGood } : { color: colorBad }}>
        <i
          className={
            rating >= 1
              ? "fas fa-star"
              : rating >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={rating >= 3.5 ? { color: colorGood } : { color: colorBad }}>
        <i
          className={
            rating >= 2
              ? "fas fa-star"
              : rating >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={rating >= 3.5 ? { color: colorGood } : { color: colorBad }}>
        <i
          className={
            rating >= 3
              ? "fas fa-star"
              : rating >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={rating >= 3.5 ? { color: colorGood } : { color: colorBad }}>
        <i
          className={
            rating >= 4
              ? "fas fa-star"
              : rating >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span style={rating >= 3.5 ? { color: colorGood } : { color: colorBad }}>
        <i
          className={
            rating >= 5
              ? "fas fa-star"
              : rating >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>

      <span>| {numReviews} reviews</span>
    </div>
  );
};

Review.defaultProps = {
  colorBad: "#D5B70F",
  colorGood: "#00A00A",
};

Review.propTypes = {
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.number.isRequired,
  colorBad: PropTypes.string,
  colorGood: PropTypes.string,
};

export default Review;
