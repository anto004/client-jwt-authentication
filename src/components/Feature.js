import React from "react";
import requireAuth from "./requireAuth";

function Feature() {
	return <h1>Feature Component</h1>;
}

export default requireAuth(Feature);
