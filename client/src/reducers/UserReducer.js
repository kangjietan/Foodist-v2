import * as actions from "../actions/types";

let initialState = {
  userLoggedIn: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER_IS_LOGGED_IN:
      return {
        ...state,
        userLoggedIn: action.payload,
      };

    default:
      return state;
  }
}
