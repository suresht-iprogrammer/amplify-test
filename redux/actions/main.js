import * as types from "../types";

export const setInfo = (name) => dispatch => {
  dispatch({
    type: types.SET_NAME,
    payload: name
  });
}