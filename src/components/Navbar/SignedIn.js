import React from "react";
import { NavLink } from "react-router-dom";

function SignedIn() {
	return (
		<div className="right">
			<ul>
				<li>
					<NavLink to="/create">New Project</NavLink>
				</li>
				<li>
					<NavLink to="/">Log Out</NavLink>
				</li>
				<li>
					<NavLink to="/" className="btn btn-floating pink lighten-1">
						SB
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default SignedIn;
