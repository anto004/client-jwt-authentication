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
import Feature from "./components/Feature";
import { TOKEN_KEY } from "./actions/types";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Set Initial State with the token from
// the browser's localStorage
const store = createStore(
	reducers,
	{ auth: { authenticated: localStorage.getItem(TOKEN_KEY) } },
	composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				{/*Keep App component simple and show one thing*/}
				<Route path="/" exact component={Welcome} />
				<Route path="/signup" component={Signup} />
				<Route path="/feature" component={Feature} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
