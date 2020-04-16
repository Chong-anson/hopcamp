import React from "react";
import { useSelector } from 'react-redux';
import ReviewItem from "./review_item";
import ReviewForm from "./review_form";
import campsite_detail from "./campsite_detail";

const ReviewIndex = (props) => {
  const { campsiteId } = props;
  const reviews = useSelector((state) => 
    state.entities.campsites[campsiteId].reviews.map( id => 
      state.entities.reviews[id]
  )).map( review => 
    <ReviewItem review={review} />
  )

  const currentUser = useSelector(state => state.entities.users[state.session.id])
  
  const handleAddReview = (e) => {
    $(".review-form-container").toggleClass("show")
  };

  const addReview = (currentUser === undefined ) ? "" : 
  (
    <button
      className="special-buttons-2"
      onClick={handleAddReview}
    >
      Add Reviews
    </button>
  )

  return (
    <div className="show-row">
      <div className="review-title row">
        <h2> {reviews.length} reviews </h2>
        {addReview}
      </div>
      <ReviewForm currentUser={currentUser} campsiteId={campsiteId}/>
      <div className="review-container">
        {reviews}
      </div>
    </div>
  )

};

export default ReviewIndex; 