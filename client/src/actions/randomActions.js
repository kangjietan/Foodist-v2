import * as actions from "../actions/types";

import axios from "axios";

export const updateRandomBusiness = (business) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_RANDOM_BUSINESS,
    payload: business,
  });
};

export const getBusinessesWithinLimit = (params, limit) => (dispatch) => {
  let promises = [];
  let results = [];

  for (let i = 0; i < limit / 50; i++) {
    let copy = Object.assign({}, params, { offset: i });
    if (params.term === "") delete copy["term"];
    promises[i] = new Promise((resolve, reject) => {
      axios
        .get("/yelp/search", { params: copy })
        .then((response) => {
          results.push(...response.data.businesses);
          resolve("Retrieved");
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }

  return new Promise((resolve, reject) => {
    return Promise.all(promises)
      .then(() => {
        dispatch({
          type: actions.GET_BUSINESSES_WITHIN_LIMIT,
          payload: results,
        });
        resolve(results);
      })
      .catch((error) => reject(error));
  });
};

export const updateCurrentList = (list) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_CURRENT_RANDOM_LIST,
    payload: list,
  });
};
