class Api::TagsController < ApplicationController
    def index
        @tags = Tag
                    .includes(:campsites)
                    .includes(:tags)
    end

    def show 
        @tag = Tag
                .includes(:campsites)
                .includes(:tags)
                .find_by(id: params[:id])
    end
end
