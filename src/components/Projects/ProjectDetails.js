import React from "react";

function ProjectDetails(props) {
	const id = props.match.params.id;

	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Fugiat ipsa repellendus itaque soluta adipisci repellat
						quis cupiditate dignissimos odio, officia maxime
						ratione. Asperiores placeat suscipit et repellendus
						temporibus porro fugiat!
					</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by Sarthak</div>
					<div>2nd September, 2AM</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;
