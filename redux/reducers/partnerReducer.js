import * as types from "../types";

const partnerReducer = (
  state = {
    partnerListData: []
  },
  action
) => {
  switch (action.type) {
    case types.SET_PARTNER_LIST_DATA:
      return {
        ...state,
        partnerListData: action.payload,
      };
    
    default:
      return { ...state };
  }
};

export default partnerReducer;
