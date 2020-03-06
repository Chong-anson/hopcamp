class Api::CampsitesController < ApplicationController
    def index
        # debugger
        @campsites = Campsite
                        .includes(:venue)
                        .includes(tags: :campsites)
                        .includes(:bookings)
        if(params[:filter])
            if (params[:filter][:bounds])
                @campsites = @campsites.in_bounds(params[:filter][:bounds])
            end
            unless (params[:filter][:min_capacity])
                @campsites = @campsites.where("capacity >= ?", params[:filter][:min_capacity])
            end 
            unless (params[:filter][:min_price])
                @campsites = @campsites.where("price >= ?", params[:filter][:min_price])
            end 
            unless (params[:filter][:max_price])
                @campsites = @campsites.where("price <= ?", params[:filter][:max_price])
            end
            if (@campsites.length > 30)        
                @campsites = @campsites.limit(30)
            end
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
