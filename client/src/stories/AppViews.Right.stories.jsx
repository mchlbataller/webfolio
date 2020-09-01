import React from "react";
import { Right } from "./components/AppViews/Right";

export default {
	title: "Portfolio/AppViews/Right",
	component: Right,
	argTypes: {
		titleTextColor: { control: "color" },
	},
};

export const Default = (args) => <Right {...args} />;
