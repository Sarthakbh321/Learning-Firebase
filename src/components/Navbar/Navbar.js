import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

function Navbar() {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);

	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/">WebSpace</Link>
				{isLoggedIn ? <SignedIn /> : <SignedOut />}
			</div>
		</nav>
	);
}

export default Navbar;
