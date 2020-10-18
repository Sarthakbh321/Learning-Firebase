import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/">
					WebSpace
				</Link>
			</div>
		</nav>
	)
}

export default Navbar;