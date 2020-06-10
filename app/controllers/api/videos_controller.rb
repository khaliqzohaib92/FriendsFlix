class Api::VideosController < ApplicationController
    before_action :ensure_signed_in, only: [:index, :show]

    def index
        @videos = (params[:type]) ? 
        Video.where(video_type: params[:type]).includes(:categories): 
        Video.all.includes(:categories)
        render :index
    end

    def show
        @video = Video.find_by(id: params[:id])
        if @video
            render :show
        else
            my_render(404, ["Not found"])
        end
    end
end
