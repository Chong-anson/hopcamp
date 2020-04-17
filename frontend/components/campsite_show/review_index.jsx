import React, { useState } from "react";
import { useSelector } from 'react-redux';
import ReviewItem from "./review_item";
import ReviewForm from "./review_form";
import campsite_detail from "./campsite_detail";


const ReviewIndex = (props) => {
  const { campsiteId } = props;
  const [ button, setButton ] = useState("Add Review");
  const [ openForm, setForm ] = useState(false);
  const [ formType, setFormType ] = useState("create")
  const [ review, setReview ] = useState(null);

  const currentUser = useSelector(state => state.entities.users[state.session.id])
  
  const handleReviewAction = (formType, reviewObj = null) => (e) => {
    e.preventDefault()

    setFormType(formType);
    setReview(reviewObj);
    
    if (openForm){
      setForm(false);
      setButton("Add Review");
    }
    else {
      setForm(true);
      setButton("X")
    }

  };

  const closeForm = () => {
    setForm(false);
    setFormType("create");
    setReview(null);
    setButton("Add Review")
  }

  const reviews = useSelector((state) =>
    state.entities.campsites[campsiteId].reviews.map(id =>
      state.entities.reviews[id]
    )).map((review,idx) =>{
      if (review !== undefined){
        return <ReviewItem key={`review-${idx}`}review={review} editForm={handleReviewAction("edit", review)} />
      }
      else 
        return null;
    })

  const addReviewButton = (currentUser === undefined ) ? "" : 
  (
    <button
      className="special-buttons-2"
      onClick={handleReviewAction("create")}
    >
      {button}
    </button>
  )
  
    return (
      <div className="show-row">
      <div className="review-title row">
        <h2> {reviews.length} {reviews.length === 1 ? "review" : "reviews"} </h2>
        {addReviewButton}
      </div>
      { openForm ? 
        <ReviewForm 
        currentUser={currentUser} 
        campsiteId={campsiteId} 
        closeForm={closeForm} 
        type={formType}
        review={review}
        /> : 
        ""
      }
      <div className="review-container">
        {reviews}
      </div>
    </div>
  
    )


};

export default ReviewIndex; 