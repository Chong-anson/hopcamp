class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end 

    def update
    end 

    def destroy
    end

    def index 
    end

    def show 
        @user = User.find_by(id: params[:id])
        if @user 
            render :show
        else
            render json: ["Invalid User"]
        end
    end

    private
    def user_params 
        params.require(
            :username, 
            :first_name,
            :last_name,
            :email,
            :password
        )
    end
end
