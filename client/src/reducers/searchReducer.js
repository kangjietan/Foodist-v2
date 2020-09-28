import * as actions from "../actions/types";

let initialState = {
  searchResults: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SEARCH_BUSINESSES_YELP:
      return {
        ...state,
        searchResults: Object.assign(state.searchResults, {
          [action.offset]: action.payload,
        }),
      };

    default:
      return state;
  }
}
