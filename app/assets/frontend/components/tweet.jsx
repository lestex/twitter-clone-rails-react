import React from "react";
import TweetActions from "../actions/TweetActions";

export default class Tweet extends React.Component {
	handleClick(e){
		TweetActions.deleteTweet(e);
	}
	render() {
		return (
	    <li className="collection-item avatar tweet-li">
	      <img className="material-icons circle" src={this.props.gravatar}/>
	      <span className="title">{this.props.name}</span>
	      <time>{this.props.formattedDate}</time>
	      <p>{this.props.body}</p>	      
	      <a class="btn-floating btn waves-effect waves-light red destroy" onClick={this.handleClick.bind(null, this.props.id)} ><i class="material-icons">remove</i></a>
	    </li>
		)
	}
}