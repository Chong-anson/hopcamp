class Api::CampsitesController < ApplicationController
    def index
        @campsites = Campsite
                        .includes(:venue)
                        .includes(tags: :campsites)
                        .includes(:bookings)

    
        if (params[:min_capacity])
            @campsites = @campsites.where("capacity >= ?", params[:min_capacity])
        end 
        if (params[:min_price] > 0 )
            @campsites = @campsites.where("price >= ?", params[:min_price])
        end 
        if (params[:max_price])
            @campsites = @campsites.where("price <= ?", params[:max_price])
        end
        if (@campsites.length > 30)        
            @campsites = @campsites.limit(30)
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
