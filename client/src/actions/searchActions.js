import * as actions from "../actions/types";

import axios from "axios";

export const searchBusinessesYelp = (params) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/yelp/search", { params })
      .then((response) => {
        let data = {};
        response.data.businesses.forEach((entry) => (data[entry.id] = entry));

        dispatch({
          type: actions.SEARCH_BUSINESSES_YELP,
          payload: data,
          offset: params.offset,
        });

        resolve("Stored");
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
