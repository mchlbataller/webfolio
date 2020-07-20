import React from "react";

export const ThemeContext = React.createContext();

const lightCard = {
	header: "#314E67",
	body: "#FFFFFF",
	headerTitle: "#FFFFFF",
	content: "#000000",
};

const darkCard = {
	header: "#192835",
	body: "#243544",
	headerTitle: "#9ADBFF",
	content: "#F3F3F3",
};

const lightProgressBar = {
	foreground: "#00529e",
	background: "#efefef",
};

const darkProgressBar = {
	foreground: "#23629A",
	background: "#efefef",
};

export const ThemeProvider = (props) => {
	const [card, setCardTheme] = React.useState(darkCard);
	const [aboutHeader, setAboutHeaderColor] = React.useState("#FFFFFF");
	const [progressBar, setProgressBarColor] = React.useState(lightProgressBar);
	// Light background for body
	// const [bodyBackground, setBodyBackground] = React.useState("#f3f3f3");
	const [bodyBackground, setBodyBackground] = React.useState("#12202D");
	const [navBackground, setNavBackground] = React.useState("#0e0e0ee6");

	return (
		<ThemeContext.Provider
			value={{
				card,
				aboutHeader,
				progressBar,
				bodyBackground,
				navBackground,
			}}
		>
			{props.children}
		</ThemeContext.Provider>
	);
};
