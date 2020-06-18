import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../actions/index";

function Greeting(props) {
	const { isAuthenticated, isLoggedOut, signOutHandler } = props;

	console.log(props);

	if (!isAuthenticated && !isLoggedOut) {
		return <h3>You are not signed in</h3>;
	} else if (!isAuthenticated && isLoggedOut) {
		return <h3>You have successfully Signed Out, See you next time!</h3>;
	} else {
		return <button onClick={signOutHandler}>Sign Out</button>;
	}
}
class Signout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedOut: false,
		};
	}

	signoutHandler = () => {
		const { signoutDispatch } = this.props;

		this.setState({ isLoggedOut: true });

		// Call action creator to clear token from store
		signoutDispatch();
	};

	render() {
		const { isLoggedOut } = this.state;
		const isAuthenticated = this.props.auth;
		return (
			<div>
				<Greeting
					isAuthenticated={isAuthenticated}
					isLoggedOut={isLoggedOut}
					signOutHandler={this.signoutHandler}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.authenticated,
	};
};

const dispatchStateToProps = (dispatch) => {
	return {
		signoutDispatch: () => dispatch(signout()),
	};
};

/**
 * requireAuth HOC
 * If the user is not signed in, user will be redirected to home page
 * This covers the edge case for message See you next time
 * if the state is logged out but the user is not authorized the message won't be display as the user would be redirected
 */
export default connect(mapStateToProps, dispatchStateToProps)(Signout);
