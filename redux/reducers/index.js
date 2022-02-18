import { combineReducers } from "redux"
import homepageReducer from "./homepageReducer"
import partnerReducer from './partnerReducer';
import sportReducer from './sportReducer';
import coachDetailReducer from './coachDetailReducer';

const rootReducer = combineReducers({
  homepageReducer,
  partnerReducer,
  sportReducer,
  coachDetailReducer
})

export default rootReducer;