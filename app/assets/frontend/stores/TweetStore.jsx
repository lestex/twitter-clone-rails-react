import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";
import Utils from "../utils/utils";
import moment from "moment";

let _tweets = [];

class TweetEventEmitter extends AppEventEmitter {
	getAll() {
		return _tweets.map( tweet => {
				tweet.formattedDate = moment(tweet.created_at).fromNow();
				return tweet;
		});
	}
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
	switch(action.actionType) {
		case ActionTypes.RECEIVED_TWEETS:			
			_tweets = action.rawTweets;	
			TweetStore.emitChange();
			break;

		case ActionTypes.RECEIVED_ONE_TWEET:			
			_tweets.unshift(action.rawTweet);			
			TweetStore.emitChange();
			break;
			
		case ActionTypes.DELETED_TWEET:
			let index = Utils.findIndexByKeyValue(_tweets, "id", action.id);
			_tweets.splice(index, 1);			
			TweetStore.emitChange();

		default:
	}	
});

export default TweetStore;