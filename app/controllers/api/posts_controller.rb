class Api::PostsController < ApplicationController
    before_action :require_logged_in

    def index
        @posts = Post.all
    end

    def show 
        @post = Post.find(params[:id])
    end

    def create 
        @post = current_user.posts.new(post_params)
        @post.user_id = current_user.id;
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update 
        @post = Post.find(params[:id])

        if @post.update(post_params)
            render :show 
        else
            render json: @post.errors.full_messages, status: 422
    end

    def destroy 
        @post = Post.find(params[:id])

        if @post.destroy
            render :show 
        else
            render json: @post.errors.full_messages, status: 422
    end 

    private

    def post_params
        params.require(:post).permit(:title, :body)
    end
end
