import * as actions from "../actions/types";

import axios from "axios";

export const searchBusinessesYelp = (params) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/yelp/search", { params })
      .then((response) => {
        console.log(response);
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
        console.error(error);
        reject(error);
      });
  });
};
