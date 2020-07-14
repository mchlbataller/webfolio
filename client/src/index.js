import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB8gLTzw02DyeK2f5SWpttlaM2YWlv1s3g",
	authDomain: "bikershub-dadd0.firebaseapp.com",
	databaseURL: "https://bikershub-dadd0.firebaseio.com",
	projectId: "bikershub-dadd0",
	storageBucket: "bikershub-dadd0.appspot.com",
	messagingSenderId: "41609801202",
	appId: "1:41609801202:web:c48813bcce3fff6e4a0f6b",
	measurementId: "G-RZ4HFL9HKW",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
