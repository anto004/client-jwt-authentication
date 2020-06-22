import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import requireAuth from "./requireAuth";

class Header extends Component {
	renderLinks() {
		const { authenticated } = this.props;
		if (authenticated) {
			return (
				<div>
					<Link to="/signout"> Sign Out</Link>
					<Link to="/feature"> Feature</Link>
				</div>
			);
		}

		return (
			<div>
				<Link to="/signup"> Sign Up</Link>
				<Link to="/signin"> Sign In</Link>
			</div>
		);
	}

	render() {
		return (
			<div>
				<Link to="/"> Redux Auth</Link>
				{this.renderLinks()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authenticated: state.auth.authenticated,
	};
};

export default connect(mapStateToProps, null)(Header);
