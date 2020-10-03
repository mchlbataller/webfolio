import "./index.css";
import "animate.css/animate.min.css";
import "firebase/analytics";
import "firebase/firestore";
import "aos/dist/aos.css";

import * as serviceWorker from "./serviceWorker";

import AOS from "aos";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./ThemeProvider";
import firebase from "firebase/app";

AOS.init();

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
			<ServiceWorkerInstallListener />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
