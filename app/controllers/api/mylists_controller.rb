class Api::MylistsController < ApplicationController
    before_action :ensure_signed_in, only: [:index, :create, :destroy]

    def index
       if params[:profile_id]
            @mylists = Mylist.where(profile_id: params[:profile_id])
            render :index
       else
        my_render(422, "Nothing to process!")
       end
    end

    def create 
        @mylist = Mylist.new(mylist_params)
        if @mylist.save!
            render :show
        else
            my_render(422, @mylist.errors.full_messages)
        end
    end

    def destroy
        
        @mylist = Mylist.find_by(video_id: mylist_params[:video_id], profile_id: mylist_params[:profile_id])
        if Mylist.destroy(@mylist.id)
            my_render(200)
        else
            my_render(404, @mylist.errors.full_messages)
        end
    end

    private
    def mylist_params
        params.require(:mylist).permit(:video_id, :profile_id)
    end
    
end