import * as actions from "../actions/types";

let initialState = {
  userLoggedIn: false,
  favoritesList: {},
  customList: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER_IS_LOGGED_IN:
      return {
        ...state,
        userLoggedIn: action.payload,
      };

    case actions.ADD_TO_CUSTOM_LIST:
      return {
        ...state,
        customList: Object.assign({}, state.customList, {
          [action.payload.id]: action.payload,
        }),
      };

    case actions.REMOVE_FROM_CUSTOM_LIST:
      let newCustomList = Object.assign({}, state.customList);
      delete newCustomList[action.payload.id];

      return {
        ...state,
        customList: newCustomList,
      };

    case actions.ADD_TO_FAVORITES_LIST:
      return {
        ...state,
        favoritesList: Object.assign({}, state.favoritesList, {
          [action.payload.id]: action.payload,
        }),
      };

    case actions.REMOVE_FROM_FAVORITES_LIST:
      let newFavoritesList = Object.assign({}, state.favoritesList);
      delete newFavoritesList[action.payload.id];

      return {
        ...state,
        favoritesList: newFavoritesList,
      };

    case actions.GET_BUSINESS_INFO_AND_UPDATE:
      return {
        ...state,
        favoritesList: Object.assign({}, state.favoritesList, {
          [action.payload.id]: action.payload,
        }),
      };

    case actions.GET_USER_FAVORITES_LIST:
      return {
        ...state,
        favoritesList: Object.assign({}, action.payload),
      };

    case actions.CLEAR_FAVORITES_LIST:
      return {
        ...state,
        favoritesList: {},
      };

    default:
      return state;
  }
}
