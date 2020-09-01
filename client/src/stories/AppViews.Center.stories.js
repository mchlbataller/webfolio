import { Center } from "./components/AppViews/Center";
import React from "react";

export default {
	title: "Portfolio/AppViews/Center",
	component: Center,
	argTypes: {
		titleTextColor: { control: "color" },
	},
};

export const Default = (args) => <Center {...args} />;
