class Api::CategoriesController < ApplicationController
    before_action :ensure_signed_in, only: [:index]

    def index
        @categories = Category.all.includes(:videos)
        render :index
    end
end
