import React from "react";
import TweetActions from "../actions/TweetActions";

export default class TweetBox extends React.Component {
	constructor(props) {
    super(props);
    this.state = { disabled: true };
    this.handleChange = this.handleChange.bind(this);
  };
	
	handleChange(e){
		let value = e.target.value;
		if (value === '') {
			this.setState({ disabled: true });
		}	
		else{
			this.setState({ disabled: false });
		}	
	}

	sendTweet(event){
		event.preventDefault();		
		TweetActions.sendTweet(this.refs.tweetTextArea.value);
		this.refs.tweetTextArea.value = '';		
	}

	render() {
		return (
			<div className="row">			
				<form onSubmit={this.sendTweet.bind(this)}>
					<div className="imput-field">
						<label>What's happening?</label>
						<textarea ref="tweetTextArea" onChange={this.handleChange} className="materialize-textarea"/>					
						<button className="btn right" disabled={this.state.disabled}>Tweet</button>
					</div>
				</form>
			</div>
		)
	}
}