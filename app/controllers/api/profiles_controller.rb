class Api::ProfilesController < ApplicationController
    before_action :ensure_signed_in, only: [:index, :create, :update, :show, :destroy]

    def index
        @profiles = current_user.profiles
        render :index
    end

    def create 
        @profile = Profile.new(profile_params)
        @profile.user_id = current_user.id
        if @profile.save!
            render :show
        else
            my_render(422, @profile.errors.full_messages)
        end
    end

    def show
        @profile = Profile.find_by(id: params[:id])
        if @profile
            render :show
        else
            my_render(404, @profile.errors.full_messages)
        end
    end

    def update
        # debugger
        @profile = Profile.find_by(id: params[:id])

        @profile.update(profile_params)
        if @profile
            render :show
        else
            my_render(422, @profile.errors.full_messages)
        end
    end

    def destroy
        @profile = Profile.find_by(id: params[:id])
        if @profile.destroy
            my_render(200)
        else
            my_render(404, @profile.errors.full_messages)
        end
    end

    private
    def profile_params
        params.require(:profile).permit(:title)
    end
    
end