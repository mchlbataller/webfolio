import "./assets/fonts.css";

import { Navbar } from "./components";
import React from "react";
import styled from "styled-components";

const Body = styled.div`
	background: #f3f3f3;
	min-height: 100vh;
`;

function App() {
	return (
		<Body>
			<Navbar />
		</Body>
	);
}

export default App;
