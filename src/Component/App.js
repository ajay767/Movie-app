import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Layout/Home";
import Result from "./Layout/Result";
import Movie from "./Layout/Movie";

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Route path="/" exact component={Home} />
				<Route path="/movie/:category" exact component={Result} />
				<Route path="/movie/title/:name" exact component={Movie} />
			</div>
		</BrowserRouter>
	);
};

export default App;
