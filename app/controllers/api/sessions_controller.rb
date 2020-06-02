class Api::SessionsController < ApplicationController
    before_action :ensure_signed_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(user_params[:email], user_params[:password])

        if @user
            signin(@user)
            render :signin
        else
            my_render(422, @user.errors.full_messages)
        end
    end

    def destroy
        signout
        my_render(200, {message: "Logged out!"})
    end
    

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
