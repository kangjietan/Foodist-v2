import * as actions from "../actions/types";

let initialState = {
  businessOnMap: {},
  enableSwitchToGoogleMaps: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_BUSINESS_ON_MAP:
      return {
        ...state,
        businessOnMap: action.payload,
      };

    case actions.SWTICH_TO_GOOGLE_MAPS:
      return {
        ...state,
        enableSwitchToGoogleMaps: action.payload,
      };

    default:
      return state;
  }
}
