import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { signupThunk } from "../../actions";

class Signup extends Component {
	// eslint-disable-next-line
	onSubmit = (formValues) => {
		// Add a callback fn as an arg for redirect
		this.props.signup(formValues, () => {
			this.props.history.push("/feature");
		});
	};

	render() {
		// handleSubmit is provided by redux-form
		// onSubmit is passed as a prop key with submit handler as a value
		// or our handler is passed to handleSubmit as an arg
		const { handleSubmit } = this.props;

		return (
			//The submitted data is passed as JSON object to handleSubmit
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label>Email</label>
					<Field
						name="email"
						type="text"
						component="input"
						autoComplete="none"
					/>
				</fieldset>
				<fieldset>
					<label>Password</label>
					<Field
						name="password"
						type="password"
						component="input"
						autoComplete="none"
					/>
				</fieldset>
				<div>{this.props.errorMessage}</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		errorMessage: state.auth.errorMessage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signup: (formValues, callback) =>
			dispatch(signupThunk(formValues, callback)),
	};
};

Signup = connect(mapStateToProps, mapDispatchToProps)(Signup);
export default reduxForm({ form: "signup" })(Signup);

// Apply multi higher components into one using compose
//export default compose(
//	connect(null, mapDispatchToProps),
//	reduxForm({ form: "signup" })(Signup)
//)(Signup);
