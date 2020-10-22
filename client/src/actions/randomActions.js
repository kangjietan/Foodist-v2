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
    params.offset = i;
    promises[i] = new Promise((resolve, reject) => {
      axios
        .get("/yelp/search", { params })
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
    return Promise.all(promises).then(() => {
      dispatch({
        type: actions.GET_BUSINESSES_WITHIN_LIMIT,
        payload: results,
      });
      resolve("Stored results");
    });
  });
};
