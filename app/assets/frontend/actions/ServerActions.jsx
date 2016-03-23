import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
	
export default {
	receivedTweets(rawTweets){		
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_TWEETS,
			rawTweets
		});
	},
	receivedOneTweet(rawTweet){		
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_ONE_TWEET,
			rawTweet
		});
	},
	deletedOneTweet(id){
		AppDispatcher.dispatch({
			actionType: ActionTypes.DELETED_TWEET,
			id
		});
	},
	receivedUsers(rawUsers){		
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_USERS,
			rawUsers
		});
	},
	receivedOneFollower(rawFollower){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
			rawFollower
		});
	}
}