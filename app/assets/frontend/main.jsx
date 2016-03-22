import React from "react";
import ReactDOM from "react-dom";

import TweetBox from "./components/tweetbox";
import TweetList from "./components/tweetlist";
import TweetStore from "./stores/TweetStore";

import TweetActions from "./actions/TweetActions";
TweetActions.getAllTweets();

let getAppState = () => {	
	return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = getAppState();		
		this._onChange = this._onChange.bind(this);
	}

	componentDidMount() {
		TweetStore.addChangeListener(this._onChange);		
	}

	componentWillUnmount() {
		TweetStore.removeChangeListener(this._onChange);
	}

	_onChange() {		
		this.setState(getAppState());
	}

	render() {
		return (
			<div className="container">
				<TweetBox />
				<TweetList tweets={this.state.tweetsList} />
			</div> 
			);
	}
}

const app = document.getElementById("react");
if (app){
	ReactDOM.render(<Main />, app);	
}
