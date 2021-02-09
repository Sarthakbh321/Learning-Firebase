import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import ProjectDetails from "./components/Projects/ProjectDetails";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/signin" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route
						exact
						path="/project/:id"
						component={ProjectDetails}
					/>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
