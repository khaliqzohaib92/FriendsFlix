class Api::GenresController < ApplicationController
    # before_action :ensure_signed_in, only: [:index]

    def index 
        @genres = Genre.all.includes(:videos)
        render :index
    end
end
