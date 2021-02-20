import React, { useEffect, useState } from "react";
import firebase from "../../utils/firebase";

function ProjectDetails(props) {
	const [project, setProject] = useState({});
	const id = props.match.params.id;

	const getProject = async () => {
		const getDoc = await firebase
			.firestore()
			.collection("projects")
			.doc(id)
			.get();

		console.log(getDoc.data());
		setProject(getDoc.data());
	};

	useEffect(() => {
		getProject();
	}, []);

	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">{project.title}</span>
					<p>{project.content}</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by {project.author}</div>
					<div>2nd September, 2AM</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;
