import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteReview } from '../../actions/review_actions';

const ReviewItem = ({review, editForm}) => {
  const {reviewer, body} = review;
  const currentUserId = useSelector(state => state.session.id)
  const dispatch = useDispatch();

  const icon = (review.recommended) ?
          <i className="fas fa-thumbs-up"></i> : 
          <i className="fas fa-thumbs-down"></i>
  const date = new Date(review.updatedAt)

  // const handleEdit = (e) => {
  //   e.preventDefault(); 
  //   editForm("edit", );
  // };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReview(review.id));
  }

  const reviewButtons = (currentUserId === review.userId) ? (
    <div className="review-item-buttons">
      <button className="edit-review"
        onClick={editForm}
        >Edit</button>
      <button className="delete-review"
        onClick={handleDelete}
        >Delete</button>
    </div> ) : ""

  return (
    <div className="review-item">
      <div className="review-item-title">
        <div>
          <div className="recommend-icon">
            {icon}
          </div>
          <p>&nbsp; 
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
        {reviewButtons}
    </div>
  )
}

export default ReviewItem; 