import * as types from "../types";

const intialState = {
  blogList: [],
  blogDetailData: [],
  blogSimilarData: [],
  blogFilterData: []
};
const blogReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.SET_BLOG_LIST:
      return {
        ...state,
        blogList: action.value,
      };
    case types.SET_BLOG_DETAIL_DATA:
      return {
        ...state,
        blogDetailData: action.value,
      };
    case types.SET_BLOG_SIMILAR_DATA:
      return {
        ...state,
        blogSimilarData: action.value,
      };
    case types.SET_BLOG_FILTER_DATA:
      return {
        ...state,
        blogFilterData: action.value,
      };
    default:
      return { ...state };
  }
};

export default blogReducer;
