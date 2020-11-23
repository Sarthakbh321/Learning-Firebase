import React, { useState } from "react";

const SignUp = () => {
	const [details, setDetails] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
	});

	const handleChange = (event) => {
		const n = { ...details };
		n[event.target.id] = event.target.value;

		setDetails(n);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(details);
	};

	return (
		<div className="container">
			<form className="white" onSubmit={handleSubmit}>
				<h5 className="grey-text text-darken-3">Sign Up</h5>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={handleChange} />
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={handleChange}
					/>
				</div>
				<div className="input-field">
					<label htmlFor="firstName">First Name</label>
					<input type="text" id="firstName" onChange={handleChange} />
				</div>
				<div className="input-field">
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName" onChange={handleChange} />
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
