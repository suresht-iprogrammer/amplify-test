import * as types from "../types";
import requestHandler from "../../services/requestHandler";

export const setSelectedSportsList = (sportName) => (dispatch) => {
  dispatch({
    type: types.SET_SELECTED_SPORT_LIST,
    payload: sportName,
  });
};

export const setCurrentStep = (step) => (dispatch) => {
  dispatch({
    type: types.SET_CURRENT_STEP,
    payload: step,
  });
};

export const getSportsListData = () => async (dispatch) => {
  let result = await requestHandler.get(`/sports/list`);
  dispatch({
    type: types.SET_SPORT_LIST_DATA,
    payload: result.payload.rows,
  });
};

export const getPartnerTypeListData = () => async (dispatch) => {
  let result = await requestHandler.get(`/partner-types/list`);
  dispatch({
    type: types.SET_PARTNER_TYPE_LIST_DATA,
    payload: result.payload.rows,
  });
};

export const setSelectedPartnerTypesList = (partnerType) => (dispatch) => {
  dispatch({
    type: types.SET_SELECTED_PARTNER_TYPE_LIST,
    payload: partnerType,
  });
};

export const setSelectedLocation = (locationName) => (dispatch) => {
  dispatch({
    type: types.SET_SELECTED_LOCATION,
    payload: locationName,
  });
};

export const getLocationList = (searchLocationName) => async (dispatch) => {
  let result = await requestHandler.get(`/locations/list?limit=10&offset=0&text=${searchLocationName}`);
  if(result && result.payload.rows != undefined) {
    if(result.payload.rows.length > 0) {
      dispatch({
        type: types.SET_LOCATION_LIST,
        payload: result.payload.rows,
      });
      dispatch({
        type: types.SHOW_MESSAGE_LOCATION_EMPTY,
        payload: "",
      });
    } else {
      dispatch({
        type: types.SET_LOCATION_LIST,
        payload: [],
      });
      dispatch({
        type: types.SHOW_MESSAGE_LOCATION_EMPTY,
        payload: "This facility not available in this area please select another location",
      });
    }
  
  } else {
    dispatch({
      type: types.SET_LOCATION_LIST,
      payload: [],
    });
    dispatch({
      type: types.SHOW_MESSAGE_LOCATION_EMPTY,
      payload: "This facility not available in this area please select another location",
    });
  }
 
};


export const resetState = () => (dispatch) => {
  dispatch({
    type: types.RESET_STATE,
  });
};