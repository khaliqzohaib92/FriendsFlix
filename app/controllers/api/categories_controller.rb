class Api::CategoriesController < ApplicationController
    before_action :ensure_signed_in, only: [:index]

    def index
        @categories = Category.all
        render :index
    end
end
