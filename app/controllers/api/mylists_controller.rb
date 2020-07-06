class Api::MylistsController < ApplicationController
    before_action :ensure_signed_in, only: [:index, :create, , :show, :destroy]

    def index
       if params[:profile_id]
            @mylists = Mylist.where(profile_id: params[:profile_id])
            render :index
       else
        my_render(422, "Nothing to process!")
       end
    end

    def create 
        @mylist = mylist.new(mylist_params)
        if @mylist.save
            render :show
        else
            my_render(422, @mylist.errors.full_messages)
        end
    end

    def destroy
        @mylist = mylist.find_by(id: params[:id])
        if @mylist.destroy
            my_render(200)
        else
            my_render(404, @mylist.errors.full_messages)
        end
    end

    private
    def mylist_params
        params.require(:mylist).permit(:video_id, :mylist_id)
    end
    
end