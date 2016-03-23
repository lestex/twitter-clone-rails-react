import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router';
import Index from "./components/Index";
import Follow from "./components/Follow";



class App extends React.Component {
	render() {
		return (
			<div className="App">				
				{this.props.children}
			</div>
		);
	}
}

const app = document.getElementById("react");
if (app){
	ReactDOM.render(
		<Router history={browserHistory}>
		    <Route component={App}>
		      <Route path="/" component={Index}/>
		      <Route path="follow" component={Follow}/>
		    </Route>
		  </Router>		 
		, app);	
}
