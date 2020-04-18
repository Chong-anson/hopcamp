class Api::BookingsController < ApplicationController
    def create
        @booking = Booking.new(booking_params)
        # debugger
        if (@booking.overlapping_requests.length == 0)
          if (@booking.save)
              render :show
          else
              render json: @booking.errors.full_messages, status: 422
          end
        else 
          render json: ["This listing has already been booked :("], status: 422
        end
    end

    # def index
    #     @bookings = Booking.all 
    #     render :index
    # end

    def destroy  
      @booking = Booking.find_by(id: params[:id])
      if (@booking)
        if (@booking.destroy)
          render json: @booking.id
        else 
          render json: @booking.errors.full_messages, status: 422
        end
      else
        render json: ["The booking doesn't exist"], status: 422
      end
    end

    private 
    def booking_params
        params.require(:booking).permit(:user_id, :campsite_id, :group_size, :start_date, :end_date)
    end 
    
end
