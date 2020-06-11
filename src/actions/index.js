import axios from "axios";
import { AUTH_USER, AUTH_ERROR, TOKEN_KEY } from "./types";

function signup(token) {
	return {
		type: AUTH_USER,
		token,
	};
}

function signupError(errorMessage) {
	return {
		type: AUTH_ERROR,
		errorMessage,
	};
}

// TODO: Move api to api.js file

export const signupThunk = (formValues, callback) => (dispatch) => {
	axios
		.post("http://localhost:3090/signup", formValues)
		.then((response) => {
			const token = response.data.token;
			dispatch(signup(token));

			// Persist Token
			//Save token to Local Storage
			localStorage.setItem(TOKEN_KEY, token);

			callback();
		})
		.catch(() => {
			const errorMessage = "Email is in use";
			dispatch(signupError(errorMessage));
		});
};
