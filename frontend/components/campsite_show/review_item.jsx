import React from "react";

const ReviewItem = ({review}) => {
  const {reviewer, body} = review;
                
  const icon = (review.recommended) ?
          <i className="fas fa-thumbs-up"></i> : 
          <i className="fas fa-thumbs-down"></i>
  const date = new Date(review.updatedAt)

  return (
    <div className="review-item">
      <div className="review-item-title">
        <div>
          <div className="recommend-icon">
            {icon}
          </div>
          <p>
            <strong> {reviewer} </strong> 
            {(!review.recommended) ? "does not" : "" } recommends this listing.
          </p>
        </div>
        <p>
          {date.toString().split(" ").slice(1,4).join(" ")}
        </p>
      </div>
      <div className="review-body">
        <p>
          {body}
        </p>
      </div>
    </div>
  )
}

export default ReviewItem; 