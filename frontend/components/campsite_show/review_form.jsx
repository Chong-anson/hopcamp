import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createReview } from "../../actions/review_actions";

const ReviewForm = (props) => {
  const { currentUser, campsiteId } = props; 
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    $(".selected-option").removeClass("selected-option")
    $(e.currentTarget).addClass("selected-option")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommended = ($(".selected-option"))[0]
    if (recommended){
      const review = {
        body, 
        recommended: recommended.getAttribute("data-recommended"),
        userId: currentUser.id,
        campsiteId
      }
      dispatch(createReview(review));
    }
    else {

    }
  }

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
            // required="true"
          />
          <label id="review-recommended">
            <span>Like this campsite? </span>
            <div className="yes-no-buttons">

              <button 
                className="review-button" 
                onClick={handleClick}
                data-recommended="true"
                >
                {/* Yes */}
                <i className="fas fa-thumbs-up"></i>
              </button>
              <button 
                className="review-button" 
                onClick={handleClick}
                data-recommended="false"
                >
                {/* No */}
                <i className="fas fa-thumbs-down"></i>
              </button>
            </div>
          </label>
          <button 
            className="special-buttons-2"
            onClick={handleSubmit}>Submit Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm; 