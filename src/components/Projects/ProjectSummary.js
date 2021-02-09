import React from "react";

function ProjectSummary({ details }) {
	return (
		<div className="card z-depth-0 project-item-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{details.title}</span>
				<p>Posted by {details.author}</p>
				<p className="grey-text">3rd September 2AM</p>
			</div>
		</div>
	);
}

export default ProjectSummary;
