class Api::UsersController < ApplicationController

    def create
        @user = User.create(user_params)
        debugger
        if @user.save
            signin(@user)
            render :signup
        else
            my_render(422, @user.errors.full_messages)
        end
    end

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
