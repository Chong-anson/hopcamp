import React from "react";

const ReviewItem = ({review}) => {
  const {reviewer, body} = review;
  return (
    <div className="review-item">
      {reviewer} 
      {body}
    </div>
  )
}

export default ReviewItem; 