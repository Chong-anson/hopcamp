class Api::CampsitesController < ApplicationController
    def index
        @campsites = Campsite
                        .includes(:venue)
                        .includes(tags: :campsites)
                        .includes(:bookings)

        if (params[:venue])
            @campsites = @campsites.select { |campsite| campsite.venue.name == params[:venue] }
        else
            @campsites = @campsites.all.sample(50)
        end
        render :index
    end

    def show 
        @campsite = Campsite
                        .includes(:venue)
                        .includes(tags: :campsites)
                        .includes(:bookings)
                        .find_by(id: params[:id])
        if @campsite
            render :show
        else
            render json: ["Campsite not found"], status: 404 
        end
    end

end
