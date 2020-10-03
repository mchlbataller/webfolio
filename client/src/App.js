import "firebase/firestore";

import { Banner, Footer, Navbar } from "components";

import LinearProgress from "@material-ui/core/LinearProgress";
import { LoadingPage } from "pages/Loading";
import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "theme";
import firebase from "firebase/app";
import { useDataStore } from "state/data";

const Landing = React.lazy(() => import("pages/Landing"));

// Scroll to element function
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 50);

function App(props) {
	const theme = React.useContext(ThemeContext);
	/* Refs for Scrolling START */
	const [appsRef, skillsRef, contactRef, aboutRef] = [
		React.useRef(null),
		React.useRef(null),
		React.useRef(null),
		React.useRef(null),
	];
	/* Refs for Scrolling END */

	const setUserData = useDataStore((state) => state.setUserData);
	const initialized = useDataStore((state) => state.initialized);
	const appNowInitialized = useDataStore((state) => state.appNowInitialized);

	React.useEffect(() => {
		// Use data from cache first
		const cachedDataFromFirestore = localStorage.getItem("cachedData");
		if (cachedDataFromFirestore) {
			setUserData(JSON.parse(cachedDataFromFirestore));
			appNowInitialized();
		}

		const fetchDataFromFirestore = async () => {
			await firebase
				.firestore()
				.collection("data")
				.doc("info")
				.get()
				.then((res) => {
					setUserData(res.data());
					appNowInitialized();
					localStorage.setItem(
						"cachedData",
						JSON.stringify(res.data())
					);
				});
		};
		fetchDataFromFirestore();
		// eslint-disable-next-line
	}, []);

	return (
		<main>
			<Navbar
				app={() => scrollToRef(appsRef)}
				contact={() => scrollToRef(contactRef)}
				skills={() => scrollToRef(skillsRef)}
				top={() => window.scrollTo(0, 0)}
				about={() => scrollToRef(aboutRef)}
			/>
			<section background={theme.bodyBackground}>
				{initialized ? (
					<React.Suspense fallback={<LinearProgress />}>
						<Landing
							appRef={appsRef}
							skillsRef={skillsRef}
							contactRef={contactRef}
							aboutRef={aboutRef}
						/>
					</React.Suspense>
				) : (
					<LoadingPage />
				)}
				{props.availableOffline && (
					<Banner
						autoHideDuration={10000}
						message="You may now use this app offline! 
						Open this app while offline then see the magic."
						style={{ marginBottom: "60px" }}
						type="success"
					/>
				)}
			</section>
			<Footer />
		</main>
	);
}

App.propTypes = {
	// Can the app be run even without internet connection?
	availableOffline: PropTypes.bool,
};

App.defaultProps = {
	availableOffline: false,
};

export default App;
