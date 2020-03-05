class Api::TagsController < ApplicationController
    def index
        @tags = Tag
                    .includes(campsites: :tags)
    end

    def show 
        @tag = Tag
                .includes(campsites: :tags)
                .find_by(id: params[:id])
    end
end
