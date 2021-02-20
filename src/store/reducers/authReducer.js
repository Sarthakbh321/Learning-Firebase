const initialState = {
	isLoggedIn: false,
	authError: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_TRUE":
			return {
				...state,
				isLoggedIn: true,
				authError: null,
			};
		case "LOGIN_ERROR":
			return {
				...state,
				isLoggedIn: false,
				authError: action.error,
			};
		case "LOGOUT_SUCCESS":
			return {
				...state,
				isLoggedIn: false,
			};
		default:
			return state;
	}
};

export default authReducer;
