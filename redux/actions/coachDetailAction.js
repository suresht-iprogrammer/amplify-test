import * as types from "../types";
import requestHandler from "../../services/requestHandler";

export const setCoachDetailsData = (coachDetails) => (dispatch) => {
  dispatch({
    type: types.SET_COACH_DETAILS_DATA,
    payload: coachDetails,
  });
};