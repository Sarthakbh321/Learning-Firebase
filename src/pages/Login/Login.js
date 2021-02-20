import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authActions";

const Login = () => {
	const [details, setDetails] = useState({ email: "", password: "" });

	const authError = useSelector((state) => state.auth.authError);

	const dispatch = useDispatch();

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
				<h5 className="grey-text text-darken-3">Sign In</h5>
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
					<button
						className="btn pink lighten-1 z-depth-0"
						onClick={() =>
							dispatch(login(details.email, details.password))
						}
					>
						Login
					</button>
				</div>
				{authError && <div className="red-text">{authError}</div>}
			</form>
		</div>
	);
};

export default Login;
