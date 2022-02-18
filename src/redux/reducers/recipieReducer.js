import * as types from "../types";

const intialState = {
  recipieList: [],
  recipieDetailData: [],
  recipieSimilarData: [],
  otherUsesData: [],
};
const recipieReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.SET_RECIPIE_LIST:
      return {
        ...state,
        recipieList: action.value,
      };
    case types.SET_RECIPIE_DETAIL_DATA:
      return {
        ...state,
        recipieDetailData: action.value,
      };
    case types.SET_RECIPIE_SIMILAR_DATA:
      return {
        ...state,
        recipieSimilarData: action.value,
      };
    case types.SET_OTHER_USES_DATA:
      return {
        ...state,
        otherUsesData: action.value,
      };
    default:
      return { ...state };
  }
};

export default recipieReducer;
