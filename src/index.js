import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	{},
	composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDom.render(
	<Provider store={store}>
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
