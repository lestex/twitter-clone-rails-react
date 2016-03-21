import React from "react";
import ReactDOM from "react-dom";
import Greet from './greet';

class Layout extends React.Component {
	render() {
		return <Greet />;
	}
}

const app = document.getElementById("react");
ReactDOM.render(<Layout />, app);