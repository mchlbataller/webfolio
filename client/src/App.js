import "firebase/firestore";

import { LinearProgress, StylesProvider } from "@material-ui/core";

import { Footer } from "components";
import { LoadingPage } from "pages/Loading";
import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "theme";
import firebase from "firebase/app";
import { useDataStore } from "state/data";

const Landing = React.lazy(() => import("pages/Landing"));

// Scroll to element function

function App() {
	const theme = React.useContext(ThemeContext);

	const setUserData = useDataStore((state) => state.setUserData);
	const initialized = useDataStore((state) => state.initialized);
	const setInitializedState = useDataStore(
		(state) => state.setInitializedState
	);
	const imageIsLoaded = useDataStore((state) => state.imageIsLoaded);

	React.useEffect(() => {
		// Use data from cache first
		const cachedDataFromFirestore = localStorage.getItem("cachedData");
		if (cachedDataFromFirestore) {
			setUserData(JSON.parse(cachedDataFromFirestore));
			// setInitializedState(true);
			setTimeout(setInitializedState, 2000, true);
		}

		const fetchDataFromFirestore = async () => {
			await firebase
				.firestore()
				.collection("data")
				.doc("info")
				.get()
				.then((res) => {
					setUserData(res.data());
					localStorage.setItem(
						"cachedData",
						JSON.stringify(res.data())
					);
					// setInitializedState(true);
					// TODO: Check if the timeout is good
					setTimeout(setInitializedState, 2000, true);
				});
		};
		fetchDataFromFirestore();
		// eslint-disable-next-line
	}, []);

	return (
		<StylesProvider injectFirst>
			<section background={theme.bodyBackground}>
				{/* TODO: add checking for imageIsLoaded state. */}
				{initialized ? (
					<React.Suspense fallback={<LinearProgress />}>
						<Landing />
					</React.Suspense>
				) : (
					<LoadingPage />
				)}
				{/* 
					// Uncomment this block if you have 
					// enabled the service worker.
					{props.availableOffline && (
					<Banner
						autoHideDuration={10000}
						message="You may now use this app offline! 
						Open this app while offline then see the magic."
						style={{ marginBottom: "60px" }}
						type="success"
					/>
				)} */}
			</section>
			<Footer />
		</StylesProvider>
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
