import types from "../types";
import axios from "axios";
import { serverApiPath } from "../../config/config";

export const getRecipieList = (category) => async (dispatch) => {
  const response = await axios.get(`${serverApiPath}/recipie?filters[recipies_category][title][$eq]=${category}&populate=*`);
  dispatch({ type: types.SET_RECIPIE_LIST, value: response.data });
};

export const getRecipieDetailData = (id) => async (dispatch) => {
  const response = await axios.get(`${serverApiPath}/recipie/${id}?populate=*`);
  dispatch({ type: types.SET_RECIPIE_DETAIL_DATA, value: response.data });
  const response1 = await axios.get(`${serverApiPath}/recipie?populate=*&filters[product][product_short_name][$eq]=${response.data.data.attributes.product.data.attributes.product_short_name}`);
  dispatch({ type: types.SET_RECIPIE_SIMILAR_DATA, value: response1.data });
};

export const getOtherUsesData = () => async (dispatch) => {
  const response = await axios.get(`${serverApiPath}/other-uses?populate=*`);
  dispatch({ type: types.SET_OTHER_USES_DATA, value: response.data });
};

// export default {
//   getBlogList
// };
