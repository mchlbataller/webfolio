import "assets/fonts.css";
import "firebase/firestore";

import { Banner, Footer, Navbar } from "components";

import Landing from "pages/Landing";
import React from "react";
import { ThemeContext } from "ThemeProvider";
import firebase from "firebase";
import styled from "styled-components";
import { useDataStore } from "state/data";

const Body = styled.div`
	background: ${(props) => props.background};
	min-height: 100vh;
	padding-top: 66px;
	* {
		font-family: "Raleway", sans-serif;
	}
`;

// Scroll to element function
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 50);

function App(props) {
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

	const setUserData = useDataStore((state) => state.setUserData);

	React.useEffect(() => {
		const fetchData = async () => {
			await firebase
				.firestore()
				.collection("data")
				.doc("info")
				.get()
				.then((res) => setUserData(res.data()));
		};
		fetchData();
		// eslint-disable-next-line
	}, []);

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
				<Banner
					autoHideDuration={15000}
					forFirstVisitsOnly
					message="This site uses analytics. 
					By using our site, you agree to the 
					collection of anonymous data to 
					analyze web traffic and optimize 
					your experience. "
					type="info"
				/>
				{props.availableOffline && (
					<Banner
						autoHideDuration={10000}
						message="You may now use this app offline! 
        Try to disconnect from the internet then see the magic."
						style={{ marginBottom: "60px" }}
						type="success"
					/>
				)}
			</Body>
			<Footer />
		</main>
	);
}

export default App;
