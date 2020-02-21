class Api::BookingsController < ApplicationController
  def index
    # debugger
    @bookings = if params[:user_id]
      # debugger
                Booking.includes(:spot).where(guest_id: params[:user_id])
              else
                # debugger
               Booking.includes(:spot).all
              end
    render :index
  end

  def show 
    @booking = Booking.find(params[:id])
    if @booking
      render :show
    else
      render json: @booking.errors.full_messages, status: 404
    end
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    # debugger
    if @booking.save 
      # debugger
      # redirect_to booking_url(@booking)
      render :show
    else
      # debugger
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def update 
    @booking = Booking.find(params[:id])

    if @booking.update(booking_params) 
      # redirect_to booking_url(@booking)
      render :show
    else 
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    # debugger
    if @booking.destroy
      # redirect_to bookings_url
      # debugger
      render :index
    else
      # debugger
      render json: ["No booking"], status: 401
    end
    # render :index
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :num_guests, :spot_id)
  end
end
