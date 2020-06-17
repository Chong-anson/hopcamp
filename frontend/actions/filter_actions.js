import { fetchCampsites } from "./campsite_actions";
export const UPDATE_FILTER = "UPDATE_FILTER";
// export const UPDATE_APPLIED_FILTER = "UPDATE_APPLIED_FILTER";
export const UPDATE_TAG_FILTER = "UPDATE_TAG_FILTER";
export const RESET_TAG_FILTER = "RESET_TAG_FILTER";
export const RESET_ALL_FILTER = "RESET_ALL_FILTER";

export const updateFilter = (filter, value) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_FILTER,
      filter,
      value,
    });
    if (filter === "bounds")
      return fetchCampsites(getState().ui.filter)(dispatch);
  };
};

export const updateTagFilter = (filter) => ({
  type: UPDATE_TAG_FILTER,
  filter,
});

export const resetTagFilter = () => ({
  type: RESET_TAG_FILTER,
});

export const resetAllFilter = () => ({
  type: RESET_ALL_FILTER,
});
