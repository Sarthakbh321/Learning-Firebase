import React from "react";
import { useHistory } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

function ProjectList({ projects }) {
	const history = useHistory();

	const handleClick = (id) => {
		history.push(`/project/${id}`);
	};

	return (
		<div className="project-list section">
			{projects.map((project, i) => (
				<div
					key={project.id}
					onClick={() => handleClick(project.id)}
					className="project-tile"
				>
					<ProjectSummary details={project} />
				</div>
			))}
		</div>
	);
}

export default ProjectList;
