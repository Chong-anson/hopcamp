class Api::CampsitesController < ApplicationController
    def index
        if (params[:venueId])
            @campsites = Campsite.where("venue_id = ?", params[:venueId]).limit(50)
        else
            @campsites = Campsite.all.limit(50) 
        end
        render :index
    end

    def show 
        @campsite = Campsite.find_by(id: params[:id])
        if @campsite
            render :show
        else
            render json: ["Campsite not found"], status: 404 
        end
    end

    private
    def campsite_params

    end
end
