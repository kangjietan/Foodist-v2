import * as actions from "../actions/types";

import axios from "axios";

export const searchBusinessesYelp = (params) => (dispatch) => {
  axios
    .get("/yelp/search", { params })
    .then((response) => {
      console.log(response);
      dispatch({
        type: actions.SEARCH_BUSINESSES_YELP,
        payload: response.data.businesses,
        offset: params.offset,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
