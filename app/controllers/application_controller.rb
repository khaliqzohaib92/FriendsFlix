class ApplicationController < ActionController::Base

    helper_method :current_user, :ensure_signed_in

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def signin(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def signout
        session[:session_token] = nil
    end

    def signed_in?
        !!current_user
    end

    def ensure_signed_in
        # debugger
        unless signed_in?
            my_render(404)
        end
    end

    # renders custom objects with status
    def my_render(*args)
        # debugger
        if args[1]
            render json: {errors: args[1]}, status: args[0]
        else
            render json: {}, status: args[0]
        end
    end
end
