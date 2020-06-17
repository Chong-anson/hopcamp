export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
import * as reviewUtil from "../util/review_api_util";

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  payload: {
    review,
  },
});

const removeReview = (review) => ({
  type: DELETE_REVIEW,
  payload: {
    review,
  },
});

const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
});

export const createReview = (review) => (dispatch) =>
  reviewUtil
    .createReview(review)
    .then((review) => dispatch(receiveReview(review)))
    .fail((res) => dispatch(receiveReviewErrors(res.responseJSON)));

export const updateReview = (review) => (dispatch) => {
  return reviewUtil
    .updateReview(review)
    .then((review) => dispatch(receiveReview(review)))
    .fail((res) => dispatch(receiveReviewErrors(res.responseJSON)));
};

export const deleteReview = (reviewId) => (dispatch) => {
  return reviewUtil
    .deleteReview(reviewId)
    .then((review) => dispatch(removeReview(review)))
    .fail((res) => dispatch(receiveReviewErrors(res.responseJSON)));
};
