import * as actions from "../actions/types";

import axios from "axios";

export const searchBusinessesYelp = (params) => (dispatch) => {
  axios
    .get("/yelp/search", { params })
    .then((response) => {
      console.log(response);
      let data = {};
      response.data.businesses.forEach((entry) => data[entry.id] = entry);

      dispatch({
        type: actions.SEARCH_BUSINESSES_YELP,
        payload: data,
        offset: params.offset,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
