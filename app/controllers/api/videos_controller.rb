class Api::VideosController < ApplicationController
    before_action :ensure_signed_in, only: [:index, :show]

    def index
        if params[:q]
            @videos = Video.search(params[:q])
            render :index
        elsif params[:genre_id] && params[:type]
            @videos = Video.find_all_by_genre_id_and_type(params[:genre_id], params[:type])
            render :index
        elsif params[:genre_id]
            @videos = Video.find_all_by_genre(params[:genre_id])
            render :index
        else
            render json: {}
        end
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
