import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

function Navbar() {
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/">
					WebSpace
				</Link>
				<SignedIn />
				<SignedOut />
			</div>
		</nav>
	)
}

export default Navbar;