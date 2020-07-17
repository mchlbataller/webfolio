import React from "react";

export const ThemeContext = React.createContext();

const lightCard = {
	header: "#314E67",
	body: "#FFFFFF",
	headerTitle: "#FFFFFF",
	content: "#000000",
};

export const ThemeProvider = (props) => {
	const [card, setCardTheme] = React.useState(lightCard);
	return (
		<ThemeContext.Provider value={{ card }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
