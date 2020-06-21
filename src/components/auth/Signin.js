import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Signin extends Component {
	submit = (values) => {
		console.log(values);
	};
	render() {
		const { handleSubmit } = this.props;
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
			</div>
		);
	}
}

Signin = reduxForm({
	form: "Signin",
})(Signin);

export default Signin;
