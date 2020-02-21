class Api::ReviewsController < ApplicationController
  before_action :require_logged_in
  
  def create
    @review = current_user.reviews.new(review_params)
    # debugger
    if @review.save
      # debugger
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end


  private

  def review_params
    params.require(:review).permit(:rating, :body, :spot_id, :author_id)
  end
end
