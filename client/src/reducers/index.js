import { combineReducers } from "redux";

import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import mapReducer from "./mapReducer";
import favoritesListReducer from "./favoritesListReducer";
import randomReducer from "./randomReducer";

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  map: mapReducer,
  favoritesList: favoritesListReducer,
  random: randomReducer,
});
