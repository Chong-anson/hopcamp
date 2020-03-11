class Api::VenuesController < ApplicationController
    def index 
        @venues = Venue.all
        render :index
    end

    # def show 
    #     @venue = Venue.includes(:campsites).find_by(id: params[:id])
    #     if (@venue)
    #         render :show 
    #     # else 
    #         # render json: "Sorry, cannot find venue", status: 404 
    #     end
    # end
end