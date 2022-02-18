import types from "../types";
import axios from "axios";
import { serverApiPath } from "../../config/config";

export const getFooterMenuList = () => async (dispatch) => {
  const response = await axios.get(`${serverApiPath}/footer-sections?populate=*`);
  dispatch({ type: types.SET_FOOTER_MENU_LIST, value: response.data });
};

export const getCategoryList = () => async (dispatch) => {
  const response = await axios.get(`${serverApiPath}/recipies-categorie?populate=*`);
  dispatch({ type: types.SET_CATEGORY_LIST, value: response.data });
};

export const getFollowsusData = () => async (dispatch) => {
  const response = await axios.get(`${serverApiPath}/follow-uses`);
  dispatch({ type: types.SET_FOLLOWS_US_DATA, value: response.data });
};

export const getNutrientsPopupInfo = (type) => async (dispatch) => {
  const response = await axios.get(`${serverApiPath}/nutrient-infos?filters[nutrient_name][$eq]=${type}&populate=*`);
  dispatch({ type: types.SET_NUTRIENTS_POPUP_INFO, value: response.data.data[0] });
};

export const setSelectedMenu = (menu) => async (dispatch) => {
  dispatch({ type: types.SELECTED_MENU, value: menu });
};

// export default {
//   getBlogList
// };
