import axios from "axios";
import { AUTH_USER } from "./types";

function signup(token) {
	return {
		type: AUTH_USER,
		token,
	};
}

// TODO: Move api to api.js file

export const signupThunk = (formValues) => (dispatch) => {
	axios
		.post("http://localhost:3090/signup", formValues)
		.then((response) => {
			const token = response.data.token;
			dispatch(signup(token));
		})
		.catch((error) => console.log(error));
};
