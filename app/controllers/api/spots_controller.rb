class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.all
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
    # render :show
  end

  def create
    # debugger
    @spot = Spot.new(spot_params)
    # debugger
    if @spot.save
      # debugger
      render :show
    else
      render json: @spot.errors.full_messages, status: 401
    end
  end

  def update
    # debugger
    @spot = Spot.find(params[:id])
    # debugger
    if @spot.update(spot_params)
      render :show
    else
      render json: @spot.errors.full_messages, status: 401
    end
  end

  private

  def spot_params
    # debugger
    params.require(:spot).permit(:title, :address, :city, :lat, :lng, :description, :price, :host_id)
  end
end