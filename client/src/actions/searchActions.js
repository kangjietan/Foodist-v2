import * as actions from "../actions/types";

import axios from "axios";

export const searchBusinessesYelp = (params) => (dispatch) => {
  let newParams = Object.assign({}, params);
  newParams.offset = params.offset * 50;
  return new Promise((resolve, reject) => {
    axios
      .get("/yelp/search", { params: newParams })
      .then((response) => {
        let data = {};
        response.data.businesses.forEach((entry) => (data[entry.id] = entry));

        if (response.data.businesses.length) {
          dispatch({
            type: actions.SEARCH_BUSINESSES_YELP,
            payload: data,
            offset: params.offset,
          });

          resolve("Stored");
        } else {
          dispatch({
            type: actions.UPDATE_SEARCH_RESULTS,
            payload: {},
          });

          resolve("No results");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateSearchTermAndLocation = (update) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_SEARCH_TERM_AND_LOCATION,
    payload: update,
  });
};

export const updateOffset = (offset) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_OFFSET,
    payload: offset,
  });
};

export const updateParamsHasNoResults = (status) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_PARAMS_HAS_NO_RESULTS,
    payload: status,
  });
};
