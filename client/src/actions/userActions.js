import * as actions from "../actions/types";

export const setUserIsLoggedIn = (status) => (dispatch) => {
  dispatch({
    type: actions.SET_USER_IS_LOGGED_IN,
    payload: status,
  });
};

export const addToCustomList = (business) => (dispatch) => {
  dispatch({
    type: actions.ADD_TO_CUSTOM_LIST,
    payload: business,
  });
};

export const removeFromCustomList = (business) => (dispatch) => {
  dispatch({
    type: actions.REMOVE_FROM_CUSTOM_LIST,
    payload: { id: business.id },
  });
};

export const addToFavoritesList = (business) => (dispatch) => {
  dispatch({
    type: actions.ADD_TO_FAVORITES_LIST,
    payload: business,
  });
};

export const removeFromFavoritesList = (business) => (dispatch) => {
  dispatch({
    type: actions.REMOVE_FROM_FAVORITES_LIST,
    payload: { id: business.id },
  });
};
