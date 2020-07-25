import "./assets/fonts.css";

import ErrorWidth from "./pages/ErrorWidth";
import Landing from "./pages/Landing";
import { Navbar } from "./components";
import React from "react";
import { ThemeContext } from "ThemeProvider";
import styled from "styled-components";

const Body = styled.div`
	background: ${(props) => props.background};
	min-height: 100vh;
	padding-top: 66px;
	* {
		font-family: "Raleway", sans-serif;
	}
`;

// Scroll to element function
const scrollToRef = (ref) => (
	window.scrollTo(0, ref.current.offsetTop - 50),
	console.log(ref.current.offsetTop)
);

function App() {
	const theme = React.useContext(ThemeContext);
	/* Refs for Scrolling START */
	const appsRef = React.useRef(null);
	const skillsRef = React.useRef(null);
	const contactRef = React.useRef(null);
	const aboutRef = React.useRef(null);
	const executeScrollApps = () => scrollToRef(appsRef);
	const executeScrollSkills = () => scrollToRef(skillsRef);
	const executeScrollContact = () => scrollToRef(contactRef);
	const executeScrollAbout = () => scrollToRef(aboutRef);
	/* Refs for Scrolling END */
	return (
		<main>
			<Navbar
				app={executeScrollApps}
				contact={executeScrollContact}
				skills={executeScrollSkills}
				top={() => window.scrollTo(0, 0)}
				about={executeScrollAbout}
			/>
			<Body background={theme.bodyBackground}>
				<Landing
					appRef={appsRef}
					skillsRef={skillsRef}
					contactRef={contactRef}
					aboutRef={aboutRef}
				/>
			</Body>
		</main>
	);
}

export default App;
