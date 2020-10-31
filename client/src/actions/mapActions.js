import * as actions from "../actions/types";

export const updateBusinessOnMap = (business) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_BUSINESS_ON_MAP,
    payload: business,
  });
};

export const switchToGoogleMaps = (state) => (dispatch) => {
  dispatch({
    type: actions.SWTICH_TO_GOOGLE_MAPS,
    payload: state,
  });
};
