import * as types from "../types";

const sportReducer = (
  state = {
    sportListData: []
  },
  action
) => {
  switch (action.type) {
    case types.SET_SPORT_LIST_DATA:
      return {
        ...state,
        sportListData: action.payload,
      };
    default:
      return { ...state };
  }
};

export default sportReducer;
