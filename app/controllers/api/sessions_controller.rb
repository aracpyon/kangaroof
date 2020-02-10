class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ['Nope. Wrong credentials!'], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    @user = current_user
    if @user
      # render json: { }
      logout!
    else
      render json: ['No User to Logout!'], status: 404
    end
  end
end