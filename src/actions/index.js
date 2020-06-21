import axios from "axios";
import { AUTH_USER, AUTH_ERROR, TOKEN_KEY, SIGN_OUT } from "./types";

function signup(token) {
	return {
		type: AUTH_USER,
		token,
	};
}

function signin(token) {
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

// TODO: Create HOC error messages
function signinError(errorMessage) {
	return {
		type: AUTH_ERROR,
		errorMessage,
	};
}
// TODO: Initialize localStorage value in the store with token or ""
export function signout() {
	// Remove token from localStorage
	localStorage.removeItem(TOKEN_KEY);

	return {
		type: SIGN_OUT,
		clearToken: "",
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

// TODO:
// Server returns nothing when invalid password is entered
export const signinThunk = (formValues, callback) => (dispatch) => {
	axios
		.post("http://localhost:3090/login", formValues)
		.then((response) => {
			console.log("response: ", response);
			const { token } = response.data;
			dispatch(signin(token));

			callback();
		})
		.catch(() => {
			const errorMessage = "Email or password is invalid";
			dispatch(signinError(errorMessage));
		});
};
