import axios from "axios";
import { AUTH_USER } from "./types";

function signup(action) {
	const { email, password } = action;
	return {
		type: AUTH_USER,
		authenticated: email,
	};
}

export const signupThunk = (formValues) => (dispatch) => {
	//axios.post("http://localhost:3090/signup", formValues);
	dispatch(signup(formValues));
};
