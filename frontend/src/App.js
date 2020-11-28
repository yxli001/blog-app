import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import EditBlog from "./pages/EditBlog";
import NewBlog from "./pages/NewBlog";
import DisplayBlog from "./pages/DisplayBlog";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<Switch>
					<Route path="/blog/:bid" exact>
						<DisplayBlog />
					</Route>
					<Route path="/blogs/new" exact>
						<NewBlog />
					</Route>
					<Route path="/blog/:bid/edit" exact>
						<EditBlog />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
