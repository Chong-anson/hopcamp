class Api::ReviewsController < ApplicationController
  def create 
    @review = Review.new(review_params)
    if (@review.save)
      render :show
    else 
      render json: @review.errors.full_messages, status: 422
    end
  end 

  def update 
    @review = Review.find_by(id: params[:id])
    if @review 
      if (@review.update(review_params))
        render :show 
      else
        render  json: @review.errors.full_messages, status: 422
      end
    else 
      render json: "Review is not found", status: 422
    end
  end

  def destroy 
    @review = Review.find_by(id: params[:id])
    if (@review.destroy)
      render :show 
    else 
      render json: @review.errors.full_messages, status: 422 
    end
  end

  private 
  def review_params
    params.require(:review).permit(:body, :recommended, :campsite_id, :user_id)
  end
end
