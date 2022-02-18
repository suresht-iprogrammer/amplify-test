import types from "../types";
import axios from "axios";
import { serverApiPath } from "../../config/config";

export const getBlogList = () => async (dispatch) => {
  const response = await axios.get(`${serverApiPath}/blog?populate=*&sort[0]=publishedAt%3Adesc`);
  dispatch({ type: types.SET_BLOG_LIST, value: response.data });
};

export const getBlogDetailData = (id) => async (dispatch) => {
  const response = await axios.get(`${serverApiPath}/blog/${id}?populate=*`);
  dispatch({ type: types.SET_BLOG_DETAIL_DATA, value: response.data });

  const response1 = await axios.get(`${serverApiPath}/blog?populate=*&filters[product][product_short_name][$eq]=${response.data.data.attributes.product.data.attributes.product_short_name}`);
  dispatch({ type: types.SET_BLOG_SIMILAR_DATA, value: response1.data });

};

export const getFilterBlogList = (filterBy, sortBy) => async (dispatch) => {
  let response = [];
  let sort = '';

  if(sortBy == 'Newest' || sortBy == 'Sort by')
    sort = 'desc';
  else
    sort = 'asc';

  if(filterBy == 'All') {
    response = await axios.get(`${serverApiPath}/blog?populate=*&sort[0]=publishedAt%3A${sort}`);
  } else {
    response = await axios.get(`${serverApiPath}/blog?populate=*&sort[0]=publishedAt%3A${sort}&filters[product][product_short_name][$eq]=${filterBy}`);
  }
  dispatch({ type: types.SET_BLOG_FILTER_DATA, value: response.data });
};

// export default {
//   getBlogList
// };
