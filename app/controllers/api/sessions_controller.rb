class Api::SessionsController < ApplicationController
    def create
        @user = User
                  .includes(:bookings)
                  .includes(:booked_campsites)
                  .find_by_credentials(
                      params[:user][:email],
                      params[:user][:password]
                  )
                  
        if @user 
            login!(@user)
            render "api/users/show"
        else
            render json: ["Invalid email/password"], status: 401
        end
    end 

    def destroy
        
        if logged_in?
            logout()
            render json: {}
        else
            render json: ["You are not logged in!"], status: 404
        end
    end


end
