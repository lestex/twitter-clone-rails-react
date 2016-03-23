class TweetsController < ApplicationController
	def index
		@tweets =Tweet.includes(:user).order(created_at: :desc).all
		render json: @tweets
	end
	def create
		@tweet = Tweet.create(body: params[:body], user_id: current_user.id)
		render json: @tweet
	end
	def destroy
		@tweet = Tweet.find(params[:id])
		@tweet.destroy
		render text: @tweet.id
	end
end
