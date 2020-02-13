class Api::UsersController < ApplicationController
  def create
    # debugger
    @user = User.new(user_params)
\
    if @user.save
      #you dont put ! when you are using custom errors
      # ! errors come from database instead of controller
      login!(@user)
      render :show
    else
      # debugger
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find_by(params[:id])
    render :show
  end

  # def destroy
  #   @user = User.
  # end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
