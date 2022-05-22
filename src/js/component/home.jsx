import React from "react";

import { Contador } from "./secondscounter.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid justify-content-center">
			<div className="row">
				<Contador />
			</div>
		</div>
	);
};

export default Home;
