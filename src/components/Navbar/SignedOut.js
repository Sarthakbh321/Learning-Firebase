import React from "react";
import { NavLink } from "react-router-dom";

function SignedOut() {
	return (
		<div className="right">
			<ul>
				<li>
					<NavLink to="/">Sign Up</NavLink>
				</li>
				<li>
					<NavLink to="/signin">Login</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default SignedOut;
