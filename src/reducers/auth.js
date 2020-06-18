import { AUTH_USER, AUTH_ERROR, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
	authenticated: "",
	errorMessage: "",
};

export default function (state = INITIAL_STATE, action) {
	const { type, token, clearToken, errorMessage } = action;

	switch (type) {
		case AUTH_USER:
			return { ...state, authenticated: token };

		case AUTH_ERROR:
			return {
				...state,
				errorMessage: errorMessage,
			};

		case SIGN_OUT:
			return { ...state, authenticated: clearToken };
		default:
			return state;
	}
}
