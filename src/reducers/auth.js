import { AUTH_USER } from "../actions/types";

const INITIAL_STATE = {
	authenticated: "",
	errorMessage: "",
};

export default function (state = INITIAL_STATE, action) {
	const { type } = action;
	switch (type) {
		case AUTH_USER:
			const userAuth = {};
			if (action.authenticated) {
				userAuth.authenticated = action.authenticated;
				userAuth.errorMessage = "";
			} else {
				userAuth.authenticated = "";
				userAuth.errorMessage = action.errorMessage;
			}
			return userAuth;
	}
	return state;
}
