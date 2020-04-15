class Api::CampsitesController < ApplicationController
    def index
        # debugger
        @campsites = Campsite
                        .with_attached_photos
                        .includes(:tags)
                        .includes(:bookings)
        # debugger
        filter = params[:filter]
        if(params[:filter])
            if (filter[:bounds])
                @campsites = @campsites.in_bounds(filter[:bounds])
            end
            
            if (filter[:min_capacity].length > 0)
                @campsites = @campsites.where("capacity >= ?", filter[:min_capacity])
            end 

            if (@campsites.length > 30)        
                @campsites = @campsites.limit(30)
            end
        end
        render :index
    end

    def show 
        @campsite = Campsite
                        .with_attached_photos
                        .includes(:tags)
                        .includes(:bookings)
                        .includes(:reviews)
                        .includes(:reviewers)
                        .find_by(id: params[:id])
        if @campsite
            render :show
        else
            render json: ["Campsite not found"], status: 404 
        end
    end




end
