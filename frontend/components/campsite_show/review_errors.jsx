import React from 'react';
import { useSelector } from 'react-redux';

const ReviewErrors = (props) => {
  let errors = useSelector(state => state.errors.review)
  if (errors.includes("User has already been taken"))
    errors = ([<li>You have already reviewed this listing!</li>])
  else 
    errors = errors.map(err => ( <li>{err}</li>))
  return (
    <div className="review-error-container">
      <h2>
        { errors.length ? "Review Error!" : ""}
      </h2>
      <ul>
        {errors}
      </ul>
    </div>
  )
}

export default ReviewErrors; 