import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import ProjectDetails from "./components/Projects/ProjectDetails";
import Login from "./pages/Login/Login";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/signin" component={Login} />
				<Route exact path="/project/:id" component={ProjectDetails} />
			</Switch>
		</Router>
	);
}

export default App;
