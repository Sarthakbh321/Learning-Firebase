import React from "react";
import ProjectSummary from "./ProjectSummary";

function ProjectList({ projects }) {
	return (
		<div className="project-list section">
			{projects.map((project, i) => (
				<ProjectSummary key={project.id} details={project} />
			))}
		</div>
	);
}

export default ProjectList;
