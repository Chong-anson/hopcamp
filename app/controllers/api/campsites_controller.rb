class Api::CampsitesController < ApplicationController
    def index
        # debugger
        @campsites = Campsite
                        .includes(:venue)
                        .includes(tags: :campsites)
                        .includes(:bookings)
        # debugger
        filter = params[:filter]
        if(params[:filter])
            if (filter[:bounds])
                @campsites = @campsites.in_bounds(filter[:bounds])
            end
            if (filter[:applied_filter] == "true")
                @campsites = @campsites.where(id: filter[:tags])
            end
            if (filter[:min_capacity].length > 0)
                @campsites = @campsites.where("capacity >= ?", filter[:min_capacity])
            end 
            if (filter[:min_price].length > 0)
                @campsites = @campsites.where("price >= ?", filter[:min_price])
            end 
            if (filter[:max_price].length > 0)
                @campsites = @campsites.where("price <= ?", filter[:max_price])
            end
            if (filter[:type] && filter[:type].length > 0 )
                @campsites = @campsites.where(campsite_type: filter[:type])
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
