import * as types from "../types";
import requestHandler from "../../services/requestHandler";

export const getPartnerListData = () => async (dispatch) => {
  let result = await requestHandler.get(`/partners/list?limit=10&offset=0&isSlider=1`);
  dispatch({
    type: types.SET_PARTNER_LIST_DATA,
    payload: result.payload.rows,
  });
};

