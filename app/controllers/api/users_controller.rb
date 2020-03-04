class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end 

    def update
        @user = User.includes(:bookings).find_by(id: params[:id])
        if @user
            if @user.update(user_params)
                render :show
            else
                render json: @user.errors.full_messages
            end
        else
            render json: ["Invalid User"], status: 422
        end
    end 


    def show 
        @user = User.includes(:bookings).find_by(id: params[:id])
        if @user 
            render :show
        else
            render json: ["Invalid User"], status: 404
        end
    end

    private
    def user_params 
        params.require(:user).permit(
            :username, 
            :first_name,
            :last_name,
            :email,
            :password
        )
    end
end
