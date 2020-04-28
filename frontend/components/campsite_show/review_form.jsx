import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { createReview, updateReview, clearReviewErrors } from "../../actions/review_actions";
import ReviewErrors from '../error_show';

const ReviewForm = (props) => {
  const { currentUser, campsiteId, review, type, closeForm } = props; 
  const [body, setBody] = useState((review ? review.body : ""));
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "edit" && !review.recommended){
      $("#review-false").click()
    }
    dispatch(clearReviewErrors())
  },[])

  const handleClick = (e) => {
    e.preventDefault();
    $(".selected-option").removeClass("selected-option")
    $(e.currentTarget).addClass("selected-option")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommended = ($(".selected-option"))[0]
    // if (recommended){
    const reviewForm = {
      body, 
      recommended: recommended.getAttribute("data-recommended"),
      userId: currentUser.id,
      campsiteId
    }

    if (type === "create" ){
      dispatch(createReview(reviewForm))
      .then( ()=> {
        closeForm();
        dispatch(clearReviewErrors())
      })
    }
    else {
      reviewForm.id = review.id; 
      dispatch(updateReview(reviewForm))
        .then(() => {
          closeForm();
          dispatch(clearReviewErrors())
        })
    }
    // }
  }

  // const handleCancel = (e) => {
  //   e.preventDefault();
  //   $(".review-form-container").removeClass("show")
  // }

  return (
    <div className="review-form-container">
      <div className="left">
        <h2>
          {currentUser ? currentUser.firstName : ""}
        </h2>
      </div>
      <div className="right">
        <form className="review-form">
          <textarea 
            placeholder="Let us know what you feel about this campsite!"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <label id="review-recommended">
            <span>Like this campsite? </span>
            <div className="yes-no-buttons">
              <button 
                id='review-true'
                className="review-button selected-option" 
                onClick={handleClick}
                data-recommended="true"
                >
                <i className="fas fa-thumbs-up"></i>
              </button>
              <button 
                id='review-false'
                className="review-button" 
                onClick={handleClick}
                data-recommended="false"
                >
                <i className="fas fa-thumbs-down"></i>
              </button>
            </div>
          </label>
          {/* <button className="clear-button" onClick={handleCancel}>Cancel Review</button> */}
          <button 
            className="special-buttons-2"
            onClick={handleSubmit}>{ type === "create" ? "Submit " : "Update "} Review
          </button>
        </form>
          <ReviewErrors type="review" />

      </div>
    </div>
  )
}

export default ReviewForm; 