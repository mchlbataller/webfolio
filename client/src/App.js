import "./assets/fonts.css";

import ErrorWidth from "./pages/ErrorWidth";
import Landing from "./pages/Landing";
import { Navbar } from "./components";
import React from "react";
import styled from "styled-components";
import { ThemeContext } from "ThemeProvider";

const Body = styled.div`
	background: ${(props) => props.background};
	min-height: 100vh;
	padding-top: 66px;
	* {
		font-family: "Raleway", sans-serif;
	}
`;

function App() {
	const theme = React.useContext(ThemeContext);
	return (
		<div>
			<Navbar />
			<Body background={theme.bodyBackground}>
				<Landing />
			</Body>
		</div>
	);
}

export default App;
