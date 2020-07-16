import "./assets/fonts.css";

import ErrorWidth from "./pages/ErrorWidth";
import Landing from "./pages/Landing";
import { Navbar } from "./components";
import React from "react";
import styled from "styled-components";

const Body = styled.div`
	background: #f3f3f3;
	min-height: 100vh;
	padding-top: 66px;
	* {
		font-family: "Raleway", sans-serif;
	}
`;

function App() {
	return (
		<div>
			<Navbar />
			<Body>
				<Landing />
			</Body>
		</div>
	);
}

export default App;
