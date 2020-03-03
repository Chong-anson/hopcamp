class Api::CampsitesController < ApplicationController
    def index
        @campsites = Campsite.includes(:venue)
        if (params[:venue])
            @campsites = @campsites.select { |campsite| campsite.venue.name == params[:venue] }
        else
            @campsites = @campsites.all
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
