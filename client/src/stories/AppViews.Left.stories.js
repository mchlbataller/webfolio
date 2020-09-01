import { Left } from "./components/Apps/Left";
import React from "react";

export default {
	title: "Portfolio/AppViews/Left",
	component: Left,
	argTypes: {
		titleTextColor: { control: "color" },
	},
};

export const Default = (args) => <Left {...args} />;
