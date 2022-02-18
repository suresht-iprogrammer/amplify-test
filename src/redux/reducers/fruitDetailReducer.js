import * as types from "../types";

const intialState = {
  productList: [],
  fruitDetailData: [],
  nutrientsData: [],
  traceData: [],
  ownerDetailData: [],
};
const fruitDetailReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.value,
      };
    case types.SET_FRUIT_DETAIL_DATA:
      return {
        ...state,
        fruitDetailData: action.value,
      };
    case types.SET_NUTRIENT_DATA:
      return {
        ...state,
        nutrientsData: action.value,
      };
    case types.SET_TRACE_DATA:
      return {
        ...state,
        traceData: action.value,
      };
    case types.SET_OWNER_DETAIL_DATA:
      return {
        ...state,
        ownerDetailData: action.value,
      };
    default:
      return { ...state };
  }
};

export default fruitDetailReducer;
