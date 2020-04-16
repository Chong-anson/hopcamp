import React, { useState } from "react";
import { useSelector } from 'react-redux';
import ReviewItem from "./review_item";
import ReviewForm from "./review_form";
import campsite_detail from "./campsite_detail";


const ReviewIndex = (props) => {
  const { campsiteId } = props;
  const [ button, setButton ] = useState("Add Review");
  const [ openForm, setForm ] = useState(false);

  const reviews = useSelector((state) => 
    state.entities.campsites[campsiteId].reviews.map( id => 
      state.entities.reviews[id]
  )).map( review => 
    <ReviewItem review={review} />
  )

  const currentUser = useSelector(state => state.entities.users[state.session.id])
  
  const handleAddReview = (e) => {
    e.preventDefault()

    // const form = $(".review-form-container")
    // form.toggleClass("show")

    if (openForm){
      console.log(openForm);
      setForm(false);
      setButton("Add Review")
    }
    else {
      console.log(openForm);
      setForm(true);
      setButton("X")

      // $(".selected-option").removeClass("selected-option");
    }
  };

  const closeForm = () => {
    setForm(false);
    setButton("Add Review")

  }

  const addReviewButton = (currentUser === undefined ) ? "" : 
  (
    <button
      className="special-buttons-2"
      onClick={handleAddReview}
    >
      {button}
    </button>
  )

  return (
    <div className="show-row">
      <div className="review-title row">
        <h2> {reviews.length} reviews </h2>
        {addReviewButton}
      </div>
      { openForm ? 
        <ReviewForm currentUser={currentUser} campsiteId={campsiteId} closeForm={closeForm}/> : 
        ""
      }
      <div className="review-container">
        {reviews}
      </div>
    </div>
  )


};

export default ReviewIndex; 