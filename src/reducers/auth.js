import { AUTH_USER } from "../actions/types";

const INITIAL_STATE = {
	authenticated: "",
	errorMessage: "",
};

export default function (state = INITIAL_STATE, action) {
	const { type } = action;
	switch (type) {
		case AUTH_USER:
			return { ...state, authenticated: action.token };

		default:
			return state;
	}
}
