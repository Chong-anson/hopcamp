export const createReview = review => {
  const { recommended, body } = review;
  return $.ajax({
    method: 'POST',
    url: "/api/reviews",
    data:{
      review: {
        user_id: review.useId, 
        campsite_id: review.campsiteId,
        body,
        recommended
      }
    }
  })
}

export const updateReview = review => {
  const { recommended, body } = review;
  return $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: {
      review: {
        body,
        recommended,
        user_id: review.useId,
        campsite_id: review.campsiteId
      }
    }
  })
}

export const deleteReview = reviewId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${reviewId}`
  })
}