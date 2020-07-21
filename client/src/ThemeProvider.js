import React from "react";

export const ThemeContext = React.createContext();

const theme = {
	dark: {
		progressBar: {
			foreground: "#23629A",
			background: "#efefef",
		},
		card: {
			header: "#192835",
			body: "#243544",
			headerTitle: "#9ADBFF",
			content: "#F3F3F3",
		},
		bodyBackground: "#12202D",
		navBackground: "#0e0e0ee6",
		aboutHeader: "#FFFFFF",
	},
	light: {
		progressBar: {
			foreground: "#00529e",
			background: "#efefef",
		},
		card: {
			header: "#314E67",
			body: "#FFFFFF",
			headerTitle: "#FFFFFF",
			content: "#000000",
		},
		aboutHeader: "#FFFFFF",
	},
};

export const ThemeProvider = (props) => {
	return (
		<ThemeContext.Provider
			value={{
				card: theme.dark.card,
				aboutHeader: theme.dark.aboutHeader,
				progressBar: theme.dark.progressBar,
				bodyBackground: theme.dark.bodyBackground,
				navBackground: theme.dark.navBackground,
			}}
		>
			{props.children}
		</ThemeContext.Provider>
	);
};
