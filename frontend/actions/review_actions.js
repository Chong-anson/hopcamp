export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW"; 
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

export const createReview =  review => dispatch => {
  return reviewUtil.createReview(review)
          .then(review => dispatch(receiveReview(review)))
          .catch(errors => console.log(errors))
}

export const updateReview = review => dispatch => {
  return reviewUtil.updateReview(review)
          .then(review => dispatch(receiveReview(review)))
          .catch(errors => console.log(errors))
} 

export const deleteReview = reviewId => dispatch => {
  return reviewUtil.deleteReview(reviewId)
          .then(review => dispatch(removeReview(review)))
          .catch(errors => console.log(errors))
}