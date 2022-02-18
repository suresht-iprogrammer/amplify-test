import * as types from "../types";

const coachDetailReducer = (
  state = {
    coachDetailsData: [],
  },
  action
) => {
  switch (action.type) {
    case types.SET_COACH_DETAILS_DATA:
      return {
        ...state,
        coachDetailsData: action.payload,
      };
    default:
      return { ...state };
  }
};

export default coachDetailReducer;
