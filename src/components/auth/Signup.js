import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class Signup extends Component {
	onSubmit(values) {
		console.log("submit: ", values);
	}

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
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default reduxForm({ form: "signup" })(Signup);
