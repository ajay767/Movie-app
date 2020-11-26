import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./Component/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers";
import thunk from "redux-thunk";

ReactDOM.render(
	<Provider store={createStore(reducers, applyMiddleware(thunk))}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
