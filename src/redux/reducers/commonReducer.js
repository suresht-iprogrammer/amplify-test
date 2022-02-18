import * as types from "../types";

const intialState = {
  footerMenuList: [],
  categoryList: [],
  followsUsData: [],
  nutrientsPopupInfo: [],
  selectedMenu: ''
};
const commonReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.SET_FOOTER_MENU_LIST:
      return {
        ...state,
        footerMenuList: action.value,
      };
    case types.SET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.value,
      };
    case types.SET_FOLLOWS_US_DATA:
      return {
        ...state,
        followsUsData: action.value,
      };
    case types.SET_NUTRIENTS_POPUP_INFO:
      return {
        ...state,
        nutrientsPopupInfo: action.value,
      };
      case types.SELECTED_MENU:
      return {
        ...state,
        selectedMenu: action.value,
      };
    default:
      return { ...state };
  }
};

export default commonReducer;
