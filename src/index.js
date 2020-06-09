import React, { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import Welcome from "./components/Welcome";

ReactDom.render(
	<BrowserRouter>
		<App>
			{/*Keep App component simple and show one thing*/}
			<Route path="/" exact component={Welcome} />
		</App>
	</BrowserRouter>,
	document.getElementById("root")
);
