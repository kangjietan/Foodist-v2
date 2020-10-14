import { combineReducers } from "redux";

import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import mapReducer from "./mapReducer";
import favoriteListReducer from "./favoritesListReducer";

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  map: mapReducer,
  favoriteList: favoriteListReducer,
});
