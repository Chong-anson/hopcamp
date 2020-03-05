class Api::TagsController < ApplicationController
    def index
        @tags = Tag
                    .includes(:campsites)
        debugger
    end

    def show 
        @tag = Tag
                .includes(campsites: :tags)
                .find_by(id: params[:id])
    end
end
