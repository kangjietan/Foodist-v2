import * as actions from "../actions/types";

let initialState = {
  favoritesListCurrentPage: 1,
  favoritesListTotalPages: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_FAVORITES_LIST_CURRENT_PAGE:
      return {
        ...state,
        favoritesListCurrentPage: action.payload,
      };

    case actions.UPDATE_FAVORITES_LIST_TOTAL_PAGES:
      return {
        ...state,
        favoritesListTotalPages: action.payload,
      };

    default:
      return state;
  }
}
