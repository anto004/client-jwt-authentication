import { AUTH_USER, AUTH_ERROR } from "../actions/types";

const INITIAL_STATE = {
	authenticated: "",
	errorMessage: "",
};

export default function (state = INITIAL_STATE, action) {
	const { type, token, errorMessage } = action;
	switch (type) {
		case AUTH_USER:
			return { ...state, authenticated: token };
		case AUTH_ERROR:
			return {
				...state,
				errorMessage: errorMessage,
			};
		default:
			return state;
	}
}
