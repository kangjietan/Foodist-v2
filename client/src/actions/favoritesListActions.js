import * as actions from "../actions/types";

export const updateFavoritesListCurrentPage = (page) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_FAVORITES_LIST_CURRENT_PAGE,
    payload: page,
  });
};

export const updateFavoritesListTotalPages = (pages) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_FAVORITES_LIST_TOTAL_PAGES,
    payload: pages,
  });
};
