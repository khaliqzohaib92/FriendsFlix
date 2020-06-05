class Api::SessionsController < ApplicationController
    before_action :ensure_signed_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(user_params[:email], user_params[:password])

        if @user
            signin(@user)
            render :signin
        else
            my_render(422, ['Invalid credentails'])
        end
    end
 
    def destroy
        my_render(404) unless current_user

        signout
        my_render(200)
    end
    

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
