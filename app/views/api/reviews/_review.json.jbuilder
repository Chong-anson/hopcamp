json.extract! review, :id, :user_id, :campsite_id, :body, :recommended, :updated_at


if (review.user) 
  name = review.user.first_name + " "+ review.user.last_name[0] + "."
  json.reviewer name
end 