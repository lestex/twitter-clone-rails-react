import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events";
import findIndexByKeyValue from "../utils/utils";
import moment from "moment";

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {

	getAll() {
		return _tweets.map( tweet => {
				tweet.formattedDate = moment(tweet.created_at).fromNow();
				return tweet;
		});
	}
	emitChange() {
		this.emit(CHANGE_EVENT);
	}
	addChangeListener(callback){
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
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
			let index = findIndexByKeyValue(_tweets, "id", action.id);
			_tweets.splice(index, 1);			
			TweetStore.emitChange();

		default:
	}	
});

export default TweetStore;