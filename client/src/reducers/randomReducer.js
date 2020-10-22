import * as actions from "../actions/types";

let initialState = {
  randomBusiness: {},
  randomBusinessesList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_RANDOM_BUSINESS:
      return {
        ...state,
        randomBusiness: action.payload,
      };

    case actions.GET_BUSINESSES_WITHIN_LIMIT:
      return {
        ...state,
        randomBusinessesList: action.payload,
      };

    default:
      return state;
  }
}
