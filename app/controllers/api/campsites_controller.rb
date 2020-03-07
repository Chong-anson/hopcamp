class Api::CampsitesController < ApplicationController
    def index
        # debugger
        @campsites = Campsite
                        .includes(:venue)
                        .includes(tags: :campsites)
                        .includes(:bookings)
        # debugger
        if(params[:filter])
            if (params[:filter][:bounds])
                @campsites = @campsites.in_bounds(params[:filter][:bounds])
            end
            if (params[:filter][:min_capacity].length > 0)
                @campsites = @campsites.where("capacity >= ?", params[:filter][:min_capacity])
            end 
            if (params[:filter][:min_price].length > 0)
                @campsites = @campsites.where("price >= ?", params[:filter][:min_price])
            end 
            if (params[:filter][:max_price].length > 0)
                @campsites = @campsites.where("price <= ?", params[:filter][:max_price])
            end
            if (params[:filter][:type])
                @campsites = @campsites.where(campsite_type: params[:filter][:type])
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
