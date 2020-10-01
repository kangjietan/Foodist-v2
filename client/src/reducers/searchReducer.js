import * as actions from "../actions/types";

let initialState = {
  searchResults: {},
  term: "",
  location: "",
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

    case actions.UPDATE_SEARCH_TERM_AND_LOCATION:
      return {
        ...state,
        term: action.payload.term,
        location: action.payload.location,
      };

    default:
      return state;
  }
}
