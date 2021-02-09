import firebase from "../../utils/firebase";
export const createProject = (project) => {
	return async (dispatch) => {
		const db = firebase.firestore();

		await db.collection("projects").add({
			...project,
			author: "Sarthak",
			createdAt: new Date(),
		});
		console.log("Project added");
		dispatch({ type: "CREATE_PROJECT", payload: project });
	};
};
