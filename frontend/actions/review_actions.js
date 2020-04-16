export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW"; 
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
import * as reviewUtil from "../util/review_api_util";

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  payload: {
    review
  }
})

const removeReview = (review) => ({
  type: DELETE_REVIEW,
  payload: {
    review
  }
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const createReview =  review => dispatch => (
  reviewUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)))
  .fail(res => dispatch(receiveErrors(res.responseJSON)))
)

export const updateReview = review => dispatch => {
  return reviewUtil.updateReview(review)
          .then(review => dispatch(receiveReview(review)))
          .fail(res => dispatch(receiveErrors(res.responseJSON)))
} 

export const deleteReview = reviewId => dispatch => {
  return reviewUtil.deleteReview(reviewId)
          .then(review => dispatch(removeReview(review)))
          .fail(res => dispatch(receiveErrors(res.responseJSON)))
}