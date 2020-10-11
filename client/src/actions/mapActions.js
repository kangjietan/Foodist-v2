import * as actions from "../actions/types";

export const updateBusinessOnMap = (business) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_BUSINESS_ON_MAP,
    payload: business,
  });
};
