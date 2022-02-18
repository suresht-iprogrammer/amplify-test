import * as types from "../types";
import requestHandler from "../../services/requestHandler";

export const getSportsListData = () => async (dispatch) => {
  let result = await requestHandler.get(`/sports/list`);
  dispatch({
    type: types.SET_SPORT_LIST_DATA,
    payload: result.payload.rows,
  });
};

