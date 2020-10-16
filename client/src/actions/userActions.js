import * as actions from "../actions/types";

import axios from "axios";

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

export const getBusinessInfoAndUpdate = (business) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/yelp/business/${business.id}`)
      .then((response) => {
        dispatch({
          type: actions.GET_BUSINESS_INFO_AND_UPDATE,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const getUserFavoritesList = () => (dispatch) => {
  axios
    .get("/user/favoriteslist")
    .then((response) => {
      dispatch({
        type: actions.GET_USER_FAVORITES_LIST,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const clearFavoritesList = () => (dispatch) => {
  dispatch({
    type: actions.CLEAR_FAVORITES_LIST,
  });
};
