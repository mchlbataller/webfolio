import "./index.css";
import "animate.css/animate.min.css";
import "firebase/analytics";
import "firebase/firestore";
import "aos/dist/aos.css";

import * as serviceWorker from "./serviceWorker";

import AOS from "aos";
import App from "./App";
import { GlobalStyles } from "styles/global";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./theme";
import firebase from "firebase/app";

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
	initClassName: "aos-init", // class applied after initialization
	animatedClassName: "aos-animate", // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: "ease", // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

var firebaseConfig = {
	apiKey: "AIzaSyCM6vO3EcDlQrrC67-eceOvmdNYAn2uji4",
	authDomain: "web-portfolio-6c371.firebaseapp.com",
	databaseURL: "https://web-portfolio-6c371.firebaseio.com",
	projectId: "web-portfolio-6c371",
	storageBucket: "web-portfolio-6c371.appspot.com",
	messagingSenderId: "937384211936",
	appId: "1:937384211936:web:eca1a6dd219f7fa3c36785",
	measurementId: "G-J3ZGJ0FMND",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const ServiceWorkerInstallListener = (props) => {
	// const [cached, setCachedState] = React.useState(false);

	// Enable this block of code to enable offline support.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	// serviceWorker.register({
	// 	onSuccess: () => setCachedState(true),
	// });

	serviceWorker.unregister();

	return <App />;
};

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<GlobalStyles />
			<ServiceWorkerInstallListener />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
