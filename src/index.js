import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import App from "./components/App";

ReactDom.render(
	<Provider store={createStore(reducers, {})}>
		<BrowserRouter>
			<App>
				{/*Keep App component simple and show one thing*/}
				<Route path="/" exact component={Welcome} />
				<Route path="/signup" component={Signup} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
