import * as actions from "../actions/types";

let initialState = {
  randomBusiness: {},
  randomBusinessesList: [],
  currentRandomList: "",
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

    case actions.UPDATE_CURRENT_RANDOM_LIST:
      return {
        ...state,
        currentRandomList: action.payload,
      };

    default:
      return state;
  }
}
