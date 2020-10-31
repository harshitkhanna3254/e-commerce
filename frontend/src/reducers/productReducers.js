import {
  productListRequest,
  productListSuccess,
  productListError,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productListRequest:
      return { loading: true, products: [] };
    case productListSuccess:
      return { loading: false, products: action.payload };
    case productListError:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
