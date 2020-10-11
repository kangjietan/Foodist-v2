import * as actions from "../actions/types";

let initialState = {
  business: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_BUSINESS_ON_MAP:
      return {
        ...state,
        business: action.payload,
      };

    default:
      return state;
  }
}
