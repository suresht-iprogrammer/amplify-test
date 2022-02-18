import * as types from "../types";

const homepageReducer = (
  state = {
    selectedSportList: [],
    selectedPartnerTypeList: [],
    currentStep: 0,
    sportListData: [],
    partnerTypeListData: [],
    selectedLocation: [],
    locationList: [],
    showLocationMessage: "",
  },
  action
) => {
  switch (action.type) {
    case types.SET_SELECTED_SPORT_LIST:
      if (state.selectedSportList.includes(action.payload) == false)
        return {
          ...state,
          selectedSportList: [...state.selectedSportList, action.payload],
        };
      else {
        let removeSelectedValue = state.selectedSportList.filter((data, i) => {
          if (data.name != action.payload.name) return data;
        });
        return {
          ...state,
          selectedSportList: removeSelectedValue,
        };
      }
    case types.SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case types.SET_SPORT_LIST_DATA:
      return {
        ...state,
        sportListData: action.payload,
      };
    case types.SET_PARTNER_TYPE_LIST_DATA:
      return {
        ...state,
        partnerTypeListData: action.payload,
      };
    case types.SET_SELECTED_PARTNER_TYPE_LIST:
      if (state.selectedPartnerTypeList.includes(action.payload) == false)
        return {
          ...state,
          selectedPartnerTypeList: [
            ...state.selectedPartnerTypeList,
            action.payload,
          ],
        };
      else {
        let removeSelectedValue = state.selectedPartnerTypeList.filter(
          (data, i) => {
            if (data.name != action.payload.name) return data;
          }
        );
        return {
          ...state,
          selectedPartnerTypeList: removeSelectedValue,
        };
      }
    case types.SET_SELECTED_LOCATION:
      if (state.selectedLocation.includes(action.payload) == false)
        return {
          ...state,
          selectedLocation: [...state.selectedLocation, action.payload],
        };
      else {
        let removeSelectedValue = state.selectedLocation.filter((data, i) => {
          if (data != action.payload) return data;
        });
        return {
          ...state,
          selectedLocation: removeSelectedValue,
        };
      }
    case types.SET_LOCATION_LIST:
      return {
        ...state,
        locationList: action.payload,
      };
    case types.SHOW_MESSAGE_LOCATION_EMPTY:
      return {
        ...state,
        showLocationMessage: action.payload,
      };

    case types.RESET_STATE:
      return {
        ...state,
        selectedSportList: [],
        selectedPartnerTypeList: [],
        currentStep: 0,
        sportListData: [],
        partnerTypeListData: [],
        selectedLocation: [],
        locationList: [],
      };
    default:
      return { ...state };
  }
};

export default homepageReducer;
