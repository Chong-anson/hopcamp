class Api::BookingsController < ApplicationController
    def create
        @booking = Booking.new(booking_params)
        # debugger
        # @booking.start_date = Date.strptime(booking_params[:start_date], '%m-%d-%y')
        # @booking.end_date = Date.strptime(booking_params[:end_date], '%m-%d-%y')
        if (@booking.save)
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def index
        @bookings = Booking.all 
        render :index
    end

    private 
    def booking_params
        params.require(:booking).permit(:user_id, :campsite_id, :group_size, :start_date, :end_date)
    end 
    
end
