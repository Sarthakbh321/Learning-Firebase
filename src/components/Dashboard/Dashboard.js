import React from "react";
import Notifications from "./Notifications";

function Dashboard() {
	return (
		<div className="dashboard container">
			<div className="row">
				<div className="col s12 m6">Hello</div>
				<div className="col s12 m5 offset-m1">
					<Notifications />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
