import { combineReducers } from "redux";

import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import mapReducer from "./mapReducer";

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  map: mapReducer,
});
