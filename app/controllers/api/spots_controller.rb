class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.all
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
    # render :show

    
  end

  def search
    # debugger
    result = Spot.search_by_keyword(params[:keyword])
    if result
      # debugger
      @spots = result
      render :index
    else 
      # debugger
      render json: ["No result"], status: 404
    end
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

  def bounds
    params[:bounds]
  end

end