import * as actions from "../actions/types";

export const setUserIsLoggedIn = (status) => (dispatch) => {
  dispatch({
    type: actions.SET_USER_IS_LOGGED_IN,
    payload: status,
  });
};
