import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/actions/authActions";

function SignedIn() {
	const dispatch = useDispatch();

	return (
		<div className="right">
			<ul>
				<li>
					<NavLink to="/create">New Project</NavLink>
				</li>
				<li>
					<NavLink to="/" onClick={() => dispatch(logout())}>
						Log Out
					</NavLink>
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
