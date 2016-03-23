class TweetsController < ApplicationController
	def index
		@tweets =Tweet.stream_for(current_user.id)
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
