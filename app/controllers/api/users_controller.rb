class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save!
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find_by(params[:id])
  end

  # def destroy
  #   @user = User.
  # end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
