class PostsController < ApplicationController
  before_action :authenticate_user!

  def create
    @post = current_user.posts.new(post_params)

    if @post.save 
      #success stuff
      redirect_to root_path
    else
      #failure stuff
      redirect_to root_path
    end
  end

  private

  def post_params
    params.require(:post).permit(:photo)
  end
end
