class Api::VideosController < ApplicationController
    before_action :ensure_signed_in, only: [:index, :show]

    def index
        @videos = (params[:type]) ? 
            Video.find_all_by_type(params[:type]) :
            (params[:genre_id] && params[:type]) ? 
            Video.find_all_by_genre_id_and_type(params[:genre_id], params[:type]) :
            Video.find_all

        render :index
    end

    def show
        @video = Video.find_by_id(params[:id])
        if @video
            render :show
        else
            my_render(404, ["Not found"])
        end
    end
end
