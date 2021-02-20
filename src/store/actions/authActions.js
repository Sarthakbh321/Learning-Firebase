import firebase from "../../utils/firebase";
export const login = (email, password) => {
	return (dispatch, getState) => {
		// ASYNC CODE

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				dispatch({ type: "LOGIN_TRUE" });
			})
			.catch((err) => {
				dispatch({ type: "LOGIN_ERROR", error: err.message });
				console.log(err);
			});
	};
};

export const logout = () => {
	return (dispatch, getState) => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: "LOGOUT_SUCCESS" });
				console.log("logout");
			});
	};
};
