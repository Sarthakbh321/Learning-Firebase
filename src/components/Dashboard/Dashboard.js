import React, { useEffect, useState } from "react";
import ProjectList from "../Projects/ProjectList";
import Notifications from "./Notifications";
import firebase from "../../utils/firebase";

function Dashboard() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const unsubscribe = firebase
			.firestore()
			.collection("projects")
			.onSnapshot((snapshot) => {
				if (snapshot.size) {
					const n = [];
					snapshot.forEach((doc) => {
						n.push({ ...doc.data(), id: doc.id });
					});

					setProjects(n);
				}
			});

		return () => unsubscribe();
	}, []);

	return (
		<div className="dashboard container">
			<div className="row">
				<div className="col s12 m6">
					<ProjectList projects={projects} />
				</div>
				<div className="col s12 m5 offset-m1">
					<Notifications />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
