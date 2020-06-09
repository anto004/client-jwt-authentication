import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
	render() {
		return (
			<div>
				<Link to="/"> Redux Auth</Link>
				<Link to="/"> Sign Up</Link>
				<Link to="/"> Sign In</Link>
				<Link to="/"> Sign Out</Link>
				<Link to="/"> Feature</Link>
			</div>
		);
	}
}
