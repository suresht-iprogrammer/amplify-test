import { combineReducers } from "redux"
import fruitDetailReducer from './fruitDetailReducer';
import blogReducer from './blogReducer';
import recipieReducer from "./recipieReducer";
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
  fruitDetailReducer,
  blogReducer,
  recipieReducer,
  commonReducer
})

export default rootReducer;