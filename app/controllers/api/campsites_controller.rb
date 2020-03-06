class Api::CampsitesController < ApplicationController
    def index
        @campsites = Campsite
                        .includes(:venue)
                        .includes(tags: :campsites)
                        .includes(:bookings)

        
        elsif (!params[:ids].length > 0)
            @campsites = @campsite.where(id: params[:ids])
        else
            @campsites = @campsites.all.limit(50)
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
