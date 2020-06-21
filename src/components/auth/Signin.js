import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signinThunk } from "../../actions/index";

function ErrorDisplay(props) {
	const { errorMessage } = props;
	return <div>{errorMessage}</div>;
}

class Signin extends Component {
	submit = (values) => {
		const { signinDispatch } = this.props;
		signinDispatch(values, () => {
			this.props.history.push("/feature");
		});
	};
	render() {
		const { handleSubmit, errorMessage } = this.props;
		return (
			<div>
				Let's Sign you up
				<form onSubmit={handleSubmit(this.submit)}>
					<div>
						<label>Email</label>
						<Field name="email" component="input" type="text" />
					</div>
					<div>
						<label>Password</label>
						<Field name="password" component="input" type="password" />
					</div>
					<button type="submit">Submit</button>
				</form>
				{errorMessage && <ErrorDisplay errorMessage={errorMessage} />}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { auth } = state;
	return {
		errorMessage: auth.errorMessage,
	};
};

const dispatchStateToProps = (dispatch) => {
	return {
		signinDispatch: (formValues, callback) =>
			dispatch(signinThunk(formValues, callback)),
	};
};

Signin = reduxForm({
	form: "Signin",
})(Signin);

export default connect(mapStateToProps, dispatchStateToProps)(Signin);
